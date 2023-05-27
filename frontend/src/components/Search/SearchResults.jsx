import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import ErrorMessage from "../UI/ErrorMessage";
import { NavLink } from "react-router-dom";
import SaveBtn from "../UI/SaveBtn";

const SearchResults = ({ list, error }) => {
  return (
    <StyledSearchResults>
      <Card className="results">
        <ul>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {list &&
            list.map((coin) => (
              <li key={coin.id}>
                <NavLink to={`graph/${coin.id}`}>
                  <img src={coin.thumb} alt={coin.name}/>
                  {coin.name}
                </NavLink>
                <SaveBtn coin={coin.id}/>
              </li>
            ))}
        </ul>
      </Card>
    </StyledSearchResults>
  );
};

const StyledSearchResults = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: calc(100%);
  z-index: 0;
  .results {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    overflow-x: hidden;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-height: min-content;
      max-height: 200px;
      overflow-y: auto;
      li {
        display: flex;
        padding-right: 10px;
        width: calc(100% - 10px);
        justify-content: space-between;
        a {
          display: flex;
          align-items: center;
          padding: 5px 0;
          font-size: 12px;
          width: 100%;
          img {
            width: 15px;
            margin-right: 5px;
          }
        }
      }
    }
  }
`;

export default SearchResults;
