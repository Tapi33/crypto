import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as StarSVG } from "../../assets/svg/like.svg";

import axios from "axios";

const AddPortfolio = ({ onClick, coin, current_price, className, showLabel }) => {


  const saveCoinHandler = (e) => {

    const article = { 
      "id_crypto":coin,
      "price":current_price,
      "quantity": +prompt("кол-во",0)
    } ;
    const headers = {
      'Authorization': `Token ${localStorage.getItem('auth_token')}`,
  };
    axios.post('http://127.0.0.1:8000/api/v1/portfolio/', article, {headers})

    

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
