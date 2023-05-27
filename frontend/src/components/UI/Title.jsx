import React from "react";
import styled from "styled-components";

const Title = ({ children, ...props }) => {
  return (
    <StyledTitle>
      {props.size === 1 && <h1 className={props.className}>{children}</h1>}
      {props.size === 2 && <h2 className={props.className}>{children}</h2>}
      {props.size === 3 && <h3 className={props.className}>{children}</h3>}
      {props.size === 4 && <h4 className={props.className}>{children}</h4>}
      {props.size === 5 && <h5 className={props.className}>{children}</h5>}
      {props.size === 6 && <h6 className={props.className}>{children}</h6>}
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    color: var(--text-white);
    font-weight: 500;
    margin-bottom: 30px;
  }
`;

export default Title;
