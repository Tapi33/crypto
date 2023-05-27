import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

const CoinCardGraph = ({ price }) => {
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
      point: {
        radius: 0,
      },
    },
  };

  const chartData = {
    labels: Array(price.length).fill(""),
    datasets: [
      {
        fill: false,
        data: price,
        borderWidth: 1.2,
        borderColor: price[0] <= price[price.length - 1] ? "#1f9531" : "#8f1818",
      },
    ],
    options: {
      animation: true,
    },
  };
  return (
    <StyledCoinCardGraph>
      <div className="overlay"></div>
      <Line options={chartOptions} data={chartData} className="graph" />
    </StyledCoinCardGraph>
  );
};

const StyledCoinCardGraph = styled.div`
  position: relative;
  width: 150px;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .graph {
    z-index: 1;
    height: 500px;
  }
`;

export default CoinCardGraph;
