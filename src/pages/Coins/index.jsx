import React, { useState } from "react";
import { useQuery } from "react-query";
import { getRates } from "../../api/queries";

import Coins from "./components/Coins";
import Loader from "../../components/UI/Loader";
import ErrorMessage from "../../components/UI/ErrorMessage";

const CoinsPage = ({ baseUrl, ...props }) => {
  const [page, setPage] = useState(1);

  // const { isLoading, data, error, isFetching, isPreviousData } = useQuery(["rates", page], () => getRates(page), {keepPreviousData: true});
  const { isLoading, data, error, isFetching, isPreviousData } = useQuery(["rates", page], () => getRates(page), {keepPreviousData: true, staleTime: 1000 * 60 * 5});
  console.log(1);

  const nextHandler = () => {
    if (isPreviousData || data?.length === 0) return
    const newPage = page + 1;
    setPage(newPage);
  };

  const prevHandler = () => {
    const newPage = page - 1;
    setPage(newPage);
  };

  return (
    <div>
      {data && <Coins list={data} page={page} fetchNext={nextHandler} fetchPrev={prevHandler} isFetching={isFetching }/>}
      {isLoading && <Loader center />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
};

export default CoinsPage;
