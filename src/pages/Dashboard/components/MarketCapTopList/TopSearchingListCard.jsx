import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Card from "../../../../components/UI/Card";
import Chip from "../../../../components/UI/Chip";
import Title from "../../../../components/UI/Title";

const TopSearchingListCard = ({ coin }) => {
  const rank = coin.market_cap_rank;

  return (
    <StyledTopSearchingListCard>
      <NavLink to={`/graph/${coin.id}`} className="navlink">
        <Card className="card">
          <Title size={4} className="title">
            <span className="title-main">
              <img src={coin.small} alt={coin.name} />
              {coin.name}
            </span>
            <Chip className="chip">#{rank}</Chip>
          </Title>
        </Card>
      </NavLink>
    </StyledTopSearchingListCard>
  );
};

const StyledTopSearchingListCard = styled.div`
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
      margin: 10px 0 0 0;
    }
  }
  .navlink {
    text-decoration: none;
    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
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
      }
    }
  }
`;

export default TopSearchingListCard;
