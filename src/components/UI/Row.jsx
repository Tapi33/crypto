import React from "react";
import styled from "styled-components";

const Row = ({ children, ...props }) => {
  return (
    <StyledRow
      className={props.className}
      flexWrap={props.flexWrap}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      padding={props.padding}
      margin={props.margin}
      overflowX={props.overflowX}
    >
      {children}
    </StyledRow>
  );
};

const StyledRow = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  overflow-x: ${(props) => props.overflowX};
`;

export default Row;
