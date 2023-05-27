import React from "react";
import Overview from "./Overview";
import CoinGraph from "./CoinGraph";

const Graph = ({ coin }) => {
  return (
    <div>
      <Overview coin={coin} />
      <CoinGraph coin={coin}/>
    </div>
  );
};

export default Graph;
