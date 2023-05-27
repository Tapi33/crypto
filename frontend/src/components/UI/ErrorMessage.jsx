import React from "react";
import styled from "styled-components";

const ErrorMessage = ({ children, ...props }) => {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
};

const StyledErrorMessage = styled.p`
  color: #dc4747;
`;

export default ErrorMessage;
