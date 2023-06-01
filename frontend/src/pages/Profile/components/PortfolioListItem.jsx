import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { useQuery } from "react-query";
import { getCoinInfo } from "../../../api/queries";

import convertNumber from "../../../utils/convert-number";

const PortfolioListItem = ({ coin }) => {
  
   return (
    <StyledCoinListItem>
      <span className="name">
        <NavLink to={`/graph/${coin.id_crypto}`}>{coin.id_crypto}</NavLink>
      </span>
      <span>{convertNumber(coin.quantity)}</span>
      <span>$ {convertNumber(coin.price)}</span>
      <span>$ {convertNumber(coin.current_price)}</span>
      <span>$ {convertNumber(coin.quantity*coin.current_price)}</span>
      <span>$ {convertNumber((coin.quantity*coin.current_price - coin.quantity*coin.price).toFixed(6))}</span>
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
