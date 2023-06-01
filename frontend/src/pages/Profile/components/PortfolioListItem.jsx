import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { useQuery } from "react-query";
import { getCoinInfo } from "../../../api/queries";

import convertNumber from "../../../utils/convert-number";

const PortfolioListItem = ({ coin }) => {
  const { status, data, error } = useQuery("coinInfo", () => getCoinInfo(coin.name),{keepPreviousData: true, staleTime: 1000 * 60 * 5});
  const currentPrice = data && data.market_data.current_price.usd;
  

   return (
    <StyledCoinListItem>
      <span className="name">
        <NavLink to={`/graph/${coin.name}`}>{coin.name}</NavLink>
      </span>
      <span>{convertNumber(coin.count)}</span>
      <span>$ {convertNumber(coin.price_buy)}</span>
      <span>$ {convertNumber(currentPrice)}</span>
      <span>$ {convertNumber(coin.count*currentPrice)}</span>
      <span>$ {convertNumber(coin.count*currentPrice - coin.count*coin.price_buy)}</span>
    </StyledCoinListItem>
  );
};

const StyledCoinListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  border-bottom: 1px solid var(--gray-decor);
  height: calc(50px - 15px);

  &:last-child {
    border-bottom: 0;
  }

  & span.image {
    max-width: 55px;
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      margin-left: 10px;
      img {
        width: 25px;
        height: auto;
      }
    }
  }
  & span {
    color: var(--text-gray);
    font-weight: 400;
    margin: 0 5px;
    &:first-child {
      margin: 0 5px 0 0;
    }
    &:first-child {
      margin: 0 0 0 5px;
    }
  }
  & span.symbol {
    text-transform: uppercase;
  }
  & span.name {
    a {
      color: var(--text-white);
      text-decoration: none;
      font-weight: 500;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  & span {
    width: 100%;
    max-width: 104px;
    text-align: left;
  }
  @media (max-width: 721px) {
    & .ath,
    & .market_cap,
    & .symbol {
      display: none;
    }
  }
`;

export default PortfolioListItem;
