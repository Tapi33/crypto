import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import convertNumber from "../../../utils/convert-number";
import CoinListItemGraph from "./CoinListItemGraph";
import SaveBtn from "../../../components/UI/SaveBtn";

const CoinListItem = ({ coin }) => {
   return (
    <StyledCoinListItem>
      <span className="image">
        <SaveBtn coin={coin.id} />
        <NavLink to={`graph/${coin.id}`}>
          <img src={coin.image} alt={coin.name} loading="lazy" />
        </NavLink>
      </span>
      <span className="name">
        <NavLink to={`graph/${coin.id}`}>{coin.name}</NavLink>
      </span>
      <span className="symbol">{coin.symbol}</span>
      <span>$ {convertNumber(coin.current_price)}</span>
      <span className="ath">$ {convertNumber(coin.ath)}</span>
      <span className="market_cap">$ {convertNumber(coin.market_cap)}</span>
      <span>
        <NavLink to={`graph/${coin.id}`}>
          <CoinListItemGraph price={coin.sparkline_in_7d.price} />
        </NavLink>
      </span>
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

export default CoinListItem;
