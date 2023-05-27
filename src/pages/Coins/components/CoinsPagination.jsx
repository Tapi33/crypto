import React from "react";
import styled from "styled-components";

import Button from "../../../components/UI/Button";
import Loader from "../../../components/UI/Loader";
import { ReactComponent as ArrowSVG } from "../../../assets/svg/bold-arrow.svg";
  
const CoinsPagination = ({ fetchPrev, fetchNext, page, isFetching }) => {
  return (
    <StyledCoinsPagination>
      {isFetching && <Loader center className="loader" />}
      <Button onClick={fetchPrev} disabled={isFetching || page < 2}>
        <ArrowSVG className="svg-prev" />
      </Button>
      <span className={`current-page ${isFetching ? "current-page-fetcshing" : ""}`}>{page}</span>
      <Button onClick={fetchNext} disabled={isFetching}>
        <ArrowSVG className="svg-next" />
      </Button>
    </StyledCoinsPagination>
  );
};

const StyledCoinsPagination = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .current-page {
    margin: 0 13px;
    color: var(--text-white);
    font-weight: 500;

    &-fetching {
      color: transparent;
    }
  }
  button {
    width: 30px;
    height: 30px;
    svg {
      fill: #ffffff;
      width: 12px;
      height: 15px;
    }
    .svg-prev {
      transform: rotate(270deg) translateY(-6px) translateX(3px);
    }

    .svg-next {
      transform: rotate(90deg) translateY(5px) translateX(-3px);
    }
  }
  .loader {
    transform: scale(0.5) translateX(-200px);
  }
`;

export default CoinsPagination;
