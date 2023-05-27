import React from "react";
import styled from "styled-components";

import Title from "../../../components/UI/Title";
import CoinsList from "./CoinsList";
import CoinsPagination from "./CoinsPagination";

const Coins = ({ list, fetchPrev, fetchNext, page, isFetching }) => {
  return (
    <StyledCoins>
      <Title size={2} className="title">
        💰 Coins list
        <CoinsPagination fetchPrev={fetchPrev} fetchNext={fetchNext} page={page} isFetching={isFetching}/>
      </Title>
      <CoinsList list={list} />
    </StyledCoins>
  );
};

const StyledCoins = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Coins;
