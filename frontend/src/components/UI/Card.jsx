import React from "react";
import styled from "styled-components";

const Card = ({ children, ...props }) => {
  return (
    <StyledCard transparent={props.transparent} className={props.className} height={props.height} onScroll={props.onScroll} ref={props.innerRef}>
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border: 1px solid ${props => props.transparent ? 'transparent' : 'var(--gray-decor)'};
  border-radius: ${props => props.transparent ? '0' : '10px'};
  background-color: ${(props) => (props.transparent ? "transparent" : "var(--gray)")};
  padding: ${props => props.transparent ? '0' : '10px'};
  overflow-y: hidden;
  overflow-x: auto;
  box-shadow: ${props => props.transparent ? "unset" : "var(--shadow)"};  
  height: ${(props) => (props.height ? props.height : "auto")};

  @media (max-width:480px) {
    padding: ${props => props.transparent ? '0' : '10px 10px'};
  }
`;

export default Card;
