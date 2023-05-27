import React from "react";
import styled from "styled-components";

const Button = ({ children, disabled, ...props }) => {
  return (
    <StyledButton disabled={disabled} className={props.className} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: var(--blue);
  box-shadow: var(--shadow);
  padding: 10px 15px;
  color: #ffffff;
  border: 0;
  border-radius: 7px;
  border: 0;
  cursor: pointer;
  &:disabled {
    &:hover {
      cursor: not-allowed;
    }
  }
  &:hover {
    background-color: var(--blue-hover);
  }
`;

export default Button;
