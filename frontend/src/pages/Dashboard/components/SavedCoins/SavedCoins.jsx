import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useQuery } from "react-query";
import { getExactCoins } from "../../../../api/queries";

import Title from "../../../../components/UI/Title";
import Loader from "../../../../components/UI/Loader";
import Row from "../../../../components/UI/Row";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import CoinCardInfo from "./CoinCardInfo";

const SavedCoins = () => {
  const [savedCoins, setSavedCoins] = useState([]);
  const [coinsList, setCoinsList] = useState([]);

  const { data, isLoading, error } = useQuery("exactCoins", () => getExactCoins(savedCoins), {
    enabled: savedCoins?.length >= 1,
  });

  useEffect(() => {
    setCoinsList(data);
  }, [data]);

  useEffect(() => {
    setSavedCoins(JSON.parse(localStorage.getItem("savedCoins")));
  }, []);

  const removeCoinHandler = (coinId) => {
    const newCoinsList = coinsList.filter((item) => item.id !== coinId);
    setCoinsList(newCoinsList);
  };

  return (
    <StyledSavedCoins>
      {isLoading && <Loader center />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <Title size={2} className="info-title">
        ❤️ Сохраненые активы<span>{coinsList ? "7 Дней" : "Нету сохраненых"}</span>
      </Title>
      {data && (
        <Row flexWrap="wrap" justifyContent="flex-start">
          {coinsList &&
            coinsList?.map((coin, i) => <CoinCardInfo key={i} coin={coin} onRemove={removeCoinHandler} />)}
        </Row>
      )}
    </StyledSavedCoins>
  );
};

const StyledSavedCoins = styled.div`
  & .info-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: var(--text-gray);
      font-weight: 400;
    }
  }
`;

export default SavedCoins;
