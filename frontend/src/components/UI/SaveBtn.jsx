import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as StarSVG } from "../../assets/svg/star.svg";

const SaveBtn = ({ onClick, coin, className, showLabel }) => {
  useEffect(() => {
    setIsSaved(false);
    const savedCoins = JSON.parse(localStorage.getItem("savedCoins"));
    savedCoins?.length > 0 &&
      savedCoins.forEach((item) => {
        if (item === coin) setIsSaved(true);
      });
  }, [coin]);

  const [isSaved, setIsSaved] = useState(false);

  const saveCoinHandler = (e) => {
    let saveCoinsArr = localStorage.getItem("savedCoins")
      ? JSON.parse(localStorage.getItem("savedCoins"))
      : [];

    if (isSaved) {
      saveCoinsArr = saveCoinsArr.filter((item) => item !== coin);
      localStorage.setItem("savedCoins", JSON.stringify(saveCoinsArr));
      setIsSaved(false);
      onClick && onClick(e);
      return;
    }

    saveCoinsArr.push(coin);
    localStorage.setItem("savedCoins", JSON.stringify(saveCoinsArr));
    setIsSaved(true);
  };
  return (
    <StyledSaveBtn showLabel={showLabel} onClick={saveCoinHandler} active={isSaved} className={className}>
      {showLabel && <span>{isSaved ? "Saved" : "Save"}</span>}
      <StarSVG />
    </StyledSaveBtn>
  );
};

const StyledSaveBtn = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 10px;
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

export default SaveBtn;
