import React from "react";
import TopSearchingList from "./MarketCapTopList/TopSearchingList";
import SavedCoins from "./SavedCoins/SavedCoins";

const Dashboard = () => {
  return (
    <div>
      <SavedCoins />
      <TopSearchingList />
    </div>
  );
};

export default Dashboard;
