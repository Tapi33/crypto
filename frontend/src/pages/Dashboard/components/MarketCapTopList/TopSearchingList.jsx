import React from "react";
import { useQuery } from "react-query";
import { getTopSevenCoins } from "../../../../api/queries";
import styled from "styled-components";

import Title from "../../../../components/UI/Title";
import Row from "../../../../components/UI/Row";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import TopSearchingListCard from "./TopSearchingListCard";



const TopSearchingList = () => {
  const { data, error } = useQuery("topSevenCoins", () => getTopSevenCoins());

  return (
    <StyledTopSearchingList>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <Title size={2} className="info-title">
        🔝 TOP searching list <span>{data ? "24 hours" : "The list is unavailable"}</span>
      </Title>
      <Row flexWrap="wrap" overflowX="auto" padding="0 0 20px 0">
        {data?.coins.map((coin, i) => (
          <TopSearchingListCard key={i} coin={coin.item} />
        ))}
      </Row>
    </StyledTopSearchingList>
  );
};

const StyledTopSearchingList = styled.div`
  margin-top: 20px;
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

export default TopSearchingList;
