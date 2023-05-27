import React from "react";
import styled from "styled-components";

const Container = ({ children, ...props }) => {
  return <ContainerStyled className={props.className}>{children}</ContainerStyled>;
};

const ContainerStyled = styled.div`
  max-width: 1200px;
  width: calc(100% - 20px);
  margin: 0 auto;
  padding: 0 10px;
`;

export default Container;
