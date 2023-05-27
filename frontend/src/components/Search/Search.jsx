import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useQuery } from "react-query";
import styled from "styled-components";
import { searchCoins } from "../../api/queries";
import Input from "../UI/Input";
import SearchResults from "./SearchResults";
import { CSSTransition } from "react-transition-group";
import Loader from "../UI/Loader";

const Search = ({ className }) => {
  const [searchText, setSearchText] = useState("");
  const [searchQuery] = useDebounce(searchText.toLowerCase(), 500);
  const [list, setList] = useState([]);

  const { data, error, refetch, isFetching } = useQuery("search", () => searchCoins(searchQuery), {
    enabled: searchQuery?.length >= 3,
  });

  useEffect(() => {
    setList([]);
    refetch();
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.length < 3) return;
    setList(data?.coins);
  }, [data]);

  return (
    <StyledSearch className={className}>
      {isFetching && <Loader className="search-loader" />}
      <Input
        placeholder="Search coins (min 3 symbols)"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onBlur={() => setSearchText("")}
        icon="search"
        className={list?.length > 0 ? "has-results" : ""}
      />
      <CSSTransition in={list?.length > 0} timeout={150} unmountOnExit classNames="fade-reverse">
        <SearchResults list={list} error={error} />
      </CSSTransition>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100% !important;
  max-width: 300px;
  .search-loader {
    position: absolute;
    left: -40px;
    transform: scale(0.4);
  }
  input {
    z-index: 1;
    width: 100% !important;
  }
  input.has-results {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export default Search;
