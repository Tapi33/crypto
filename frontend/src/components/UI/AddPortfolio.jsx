import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as StarSVG } from "../../assets/svg/like.svg";

const AddPortfolio = ({ onClick, coin, current_price, className, showLabel }) => {

    const [portfolioCoin, setPortfolioCoin] = useState([])

  const saveCoinHandler = (e) => {

    setPortfolioCoin(prev=> [...prev, {
        name:coin,
        current_price,
        count: +prompt("кол-во",0)
    }])

    console.log(portfolioCoin);

    let saveCoinsArr = localStorage.getItem("portfolioCoins")
      ? JSON.parse(localStorage.getItem("portfolioCoins"))
      : []; 

    saveCoinsArr.push(coin);
    localStorage.setItem("portfolioCoins", JSON.stringify(saveCoinsArr));
  };
  return (
    <StyledSaveBtn showLabel={showLabel} onClick={saveCoinHandler} className={className}>
      {showLabel && <span>Добавить в портфель</span>}
    </StyledSaveBtn>
  );
};

const StyledSaveBtn = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 10px;
    transition: 0.2s ease;
    cursor: pointer;
  }

  svg {
    width: 13px;
    height: 13px;
    fill: ${(props) => (props.active ? "var(--blue)" : "var(--text-gray)")};
    transition: 0.2s ease;
    cursor: pointer;

    &:hover {
      fill: var(--blue-hover);
    }
    
    @media (max-width: 760px) {
      &:hover {
        pointer-events: none;
      }
    }
  }
`;

export default AddPortfolio;
