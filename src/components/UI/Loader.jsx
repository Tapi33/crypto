import React from "react";
import styled from "styled-components";

const Loader = ({center, className}) => {
  return (
    <StyledLoader center="center" className={className}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  position: ${props => props.center ? "absolute" : "relative"};
  left: ${props => props.center ? "50%" : "unset"};
  transform: ${props => props.center ? "translateX(-50%)" : "unset"};
  
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    border: 4px solid var(--blue);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--blue) transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
