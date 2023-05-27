import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ArrowSVG } from "../../assets/svg/arrow.svg";

const GoBackBtn = () => {
  let navigate = useNavigate();

  return (
    <StyledGoBackBtn onClick={() => navigate(-1)}>
      <ArrowSVG />
      Go Back
    </StyledGoBackBtn>
  );
};

const StyledGoBackBtn = styled.span`
  width: 100px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--text-white);
`;

export default GoBackBtn;
