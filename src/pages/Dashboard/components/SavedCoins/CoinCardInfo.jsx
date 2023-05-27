import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import convertNumber from "../../../../utils/convert-number";

import Card from "../../../../components/UI/Card";
import Chip from "../../../../components/UI/Chip";
import Title from "../../../../components/UI/Title";
import CoinCardGraph from "./CoinCardGraph";
import SaveBtn from "../../../../components/UI/SaveBtn";

const CoinCardInfo = ({ coin, onRemove }) => {
  const price = convertNumber(coin.current_price);

  const priceChangeClass =
    coin.sparkline_in_7d.price[0] <= coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length - 1]
      ? "chip-green"
      : "chip-red";

  const removeCoin = (e) => {
    e.preventDefault();
    onRemove(coin.id);
  };

  return (
    <StyledCoinCardInfo>
      <NavLink to={`/graph/${coin.id}`} className="navlink">
        <Card className="card">
          <Title size={4} className="title">
            <span className="title-main">
              <img src={coin.image} alt={coin.name} />
              {coin.name}
            </span>
            <Chip className={`chip ${priceChangeClass}`}>${price}</Chip>
          </Title>
          <div className="footer">
            <CoinCardGraph price={coin.sparkline_in_7d.price} />
            <SaveBtn coin={coin.id} onClick={removeCoin} />
          </div>
        </Card>
      </NavLink>
    </StyledCoinCardInfo>
  );
};

const StyledCoinCardInfo = styled.div`
  width: calc(33.3% - 20px);
  margin: 10px;
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    margin: 0 10px 10px 10px;
  }
  @media (max-width: 768px) {
    &:nth-child(3) {
      margin: 10px;
    }
    width: calc(50% - 20px);
  }
  @media (max-width: 450px) {
    width: calc(100%);
    &:nth-child(n) {
      margin: 10px 0;
    }
    &:first-child {
      margin: 0 0 10px 0;
    }
    &:last-child {
      margin: 10px 0 10px 0;
    }
  }
  .navlink {
    text-decoration: none;
    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      height: 127px;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0;
        &-main {
          display: flex;
          align-items: center;
          img {
            width: 30px;
            height: 30px;
            margin-right: 7px;
          }
        }
        .chip {
          margin-left: 10px;
          color: #ffffff;
          &-green {
            background-color: #007d00;
          }
          &-red {
            background-color: #960000;
          }
        }
      }

      .footer {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }
    }
  }
`;

export default CoinCardInfo;
