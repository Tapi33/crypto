import React from "react";
import styled from "styled-components";

const Chip = ({ children, className }) => {
  return <StyledChip className={className}>{children}</StyledChip>;
};

const StyledChip = styled.span`
  padding: 5px 10px;
  background-color: var(--gray-decor);
  color: var(--text-white);
  width: min-content;
  border-radius: 7px;
  @media (max-width:768px) {
    padding: 3px 7px;
    font-size: 10px !important;
  }
  &:hover {
    background-color: var(--gray);
  }
`;

export default Chip;
