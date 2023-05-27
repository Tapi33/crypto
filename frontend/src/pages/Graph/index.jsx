import React from "react";
import { useQuery } from "react-query";
import { getCoinInfo } from "../../api/queries";
import { useParams } from "react-router-dom";

import GoBackBtn from "../../components/UI/GoBackBtn";
import Loader from "../../components/UI/Loader";
import Graph from "./components/Graph";
import ErrorMessage from "../../components/UI/ErrorMessage";

const GraphPage = () => {
  const coin = useParams().id;
  const { status, data, error } = useQuery("coinInfo", () => getCoinInfo(coin));

  return (
    <div>
      <GoBackBtn />
      {status === "loading" && <Loader />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {data && <Graph coin={data} />}
    </div>
  );
};

export default GraphPage;
