import React, { useEffect, useState } from "react";
import styled from "styled-components";
import convertNumber from "../../../utils/convert-number";

import Card from "../../../components/UI/Card";
import Chip from "../../../components/UI/Chip";
import SaveBtn from "../../../components/UI/SaveBtn";
import Title from "../../../components/UI/Title";
import { translateInfo } from "../../../api/queries";
import AddPortfolio from "../../../components/UI/AddPortfolio";

const Overview = ({ coin }) => {
  const currentPrice = `$${convertNumber(coin.market_data.current_price.usd)}`;
  const priceChange = coin.market_data.price_change_percentage_7d;
  const priceChangeClass = priceChange > 0 ? "green" : "red";
  const marketCap = `$${convertNumber(coin.market_data.market_cap.usd)}`;
  const ath = `$${convertNumber(coin.market_data.ath.usd)}`;
  const atl = `$${convertNumber(coin.market_data.atl.usd)}`;
  const totalVolume = `$${convertNumber(coin.market_data.total_volume.usd)}`;

  const [infoCoin, setInfoCoin] = useState();

  // useEffect(()=>{
  //     translateInfo(coin.description.en).then(res => setInfoCoin(res[0]))
  // },[])


  return (
    <StyledOverview>
      <Title size={2}>
        <img src={coin.image.small} alt={coin.name} />
        {coin.name}
        <SaveBtn showLabel coin={coin.id} className="save-btn"/>
        <AddPortfolio showLabel coin={coin.id} current_price={coin.market_data.current_price.usd} className="save-btn"/>
      </Title>
      <Title size={4}>
        {currentPrice}
        <span className={priceChangeClass}>{priceChange.toFixed(2)}% (7 days)</span>
      </Title>
      <div className="info">
        {/* {infoCoin && (
          <Card className="card">
            <p>{infoCoin}</p>
          </Card>
        )} */}

        <div className="chips">
          {/* Quick information */}
          <div className="additional-info">
            <span className="heading">Market Cap</span>
            <Chip className="value">{marketCap}</Chip>
          </div>
          <div className="additional-info">
            <span className="heading">Market Cap Rank</span>
            <Chip className="value">#{coin.market_cap_rank}</Chip>
          </div>
          <div className="additional-info">
            <span className="heading">All-time hight</span>
            <Chip className="value">{ath}</Chip>
          </div>
          <div className="additional-info">
            <span className="heading">All-time low</span>
            <Chip className="value">{atl}</Chip>
          </div>
          <div className="additional-info">
            <span className="heading">Total Volume</span>
            <Chip className="value">{totalVolume}</Chip>
          </div>

          {/* Chip links to homepage, git and reddit */}
          <div className="chips-wrap">
            {coin.links.homepage[0] && (
              <Chip className="chip">
                <a href={coin.links.homepage[0]} target="_blank" rel="noreferrer">
                  Website
                </a>
              </Chip>
            )}
            {coin.links.repos_url.github.length > 0 && (
              <Chip className="chip">
                <a href={coin.links.repos_url.github[0]} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Chip>
            )}
            {coin.links.repos_url.bitbucket.length > 0 && (
              <Chip className="chip">
                <a href={coin.links.repos_url.bitbucket[0]} target="_blank" rel="noreferrer">
                  BitBucket
                </a>
              </Chip>
            )}
            {coin.links.subreddit_url && (
              <Chip className="chip">
                <a href={coin.links.subreddit_url} target="_blank" rel="noreferrer">
                  Reddit
                </a>
              </Chip>
            )}
          </div>
        </div>
      </div>
    </StyledOverview>
  );
};

const StyledOverview = styled.div`
  & h2 {
    display: flex;
    align-items: center;
    width: 100%;
    img {
      margin-right: 10px;
      width: 40px;
      height: auto;
    }
    .save-btn {
      margin-left: auto;
    }
  }
  & h4 {
    display: flex;
    align-items: center;
    span {
      color: var(--text-gray);
      margin-left: 15px;
    }
    span.green {
      color: green;
    }
    span.red {
      color: red;
    }
    
  }

  & p {
    color: var(--text-gray);
    font-weight: 300;
    line-height: 20px;
    a {
      color: var(--blue);
    }
  }
  .info {
    display: flex;
    align-items: flex-start;

    .card {
      margin-right: 20px;
      p {
        height: 189px;
        overflow-y: scroll;
        padding-right: 10px;
      }
    }
    .chips {
      width: calc(40%);
      display: flex;
      flex-direction: column;
      .chips-wrap {
        display: flex;
        .chip {
          margin-right: 10px;
          margin-bottom: 10px;
          a {
            color: var(--blue);
            text-decoration: none;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }

      .additional-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 300px;
        margin-bottom: 10px;
        .heading {
          color: var(--text-gray);
          font-weight: 300;
        }
        .value {
          color: var(--text-white);
        }
      }
    }
    @media (max-width: 760px) {
      flex-direction: column;
      .card {
        width: 100%;
        background: transparent;
        border: 0;
        padding: 0;
        overflow-x: hidden;
        border-radius: 0;
        margin-bottom: 20px;
        box-shadow: unset;
      }
      p {
        max-width: 100%;
        width: 100%;
        max-height: 200px;
        height: min-content !important;
      }
      .additional-info {
        min-width: 100%;
      }
      .chips {
        width: 100%;

        .chips-wrap {
          margin-left: 0;
        }
      }
    }
  }
`;

export default Overview;
