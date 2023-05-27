import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getCoinGraph } from "../../../api/queries";
import convertUTC from "../../../utils/convert-utc";

import ErrorMessage from "../../../components/UI/ErrorMessage";
import Loader from "../../../components/UI/Loader";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import GraphSwitcher from "./GraphSwitcher";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

const CoinGraph = ({ coin }) => {
  const { isLoading, isFetching, data, error, isRefetchError, refetch } = useQuery(
    "graph",
    () => getCoinGraph(coin.id, period, "daily"),
    {
      keepPreviousData: true,
    }
  );
  const [category, setCategory] = useState("prices");
  const [categoryTitle, setCategoryTitle] = useState("Prices");
  const [period, setPeriod] = useState(7);
  const [pointScale, setPointScale] = useState(2);
  const [XLabels, setXLabels] = useState([]);
  const [YLabels, setYLabels] = useState([]);

  useEffect(() => {
    refetch();
    period > 30 ? setPointScale(1) : setPointScale(3);
    period === 'max' && setPointScale(0);
  }, [period, refetch]);

  useEffect(() => {
    if (data) {
      const XLabels = data[category].map((item) => {
        return convertUTC(item[0]);
      });
      const YLabels = data[category].map((item) => {
        return item[1];
      });
      setXLabels(XLabels);
      setYLabels(YLabels);
    }
  }, [data, category]);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { color: "#a9a9a979" },
      },
    },
    elements: {
      point: {
        radius: pointScale,
      },
    },
  };

  const chartData = {
    labels: XLabels,
    datasets: [
      {
        fill: true,
        label: `${coin.name} ${categoryTitle} in USD`,
        data: YLabels,
        borderWidth: 1,
        borderColor: YLabels[0] < YLabels[YLabels.length - 1] ? "#1f9531" : "#8f1818",
        backgroundColor: YLabels[0] < YLabels[YLabels.length - 1] ? "#1f953130" : "#8f18182c",
      },
    ],
  };

  const categoryClickHandler = (category, categoryTitle) => {
    setCategory(category);
    setCategoryTitle(categoryTitle);
  };

  const periodClickHandler = (period) => {
    setPeriod(period);
  };

  return (
    <StyledCoinGraph>
      {isLoading && <Loader center />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {data && (
        <div>
          <div className="switchers">
            <GraphSwitcher type="categories" onClick={categoryClickHandler} className="categories" />
            <GraphSwitcher type="periods" onClick={periodClickHandler} disabled={isFetching} />
          </div>
          {isRefetchError}
          <Line options={chartOptions} data={chartData} className="graph" />
        </div>
      )}
    </StyledCoinGraph>
  );
};

const StyledCoinGraph = styled.div`
  margin-top: 40px;
  @media (max-width: 760px) {
    margin-top: 20px;
  }
  .switchers {
    display: flex;
    flex-wrap: wrap;
    .categories {
      margin-right: 20px;
    }
  }
  .graph {
    margin-top: 30px;
  }
`;

export default CoinGraph;
