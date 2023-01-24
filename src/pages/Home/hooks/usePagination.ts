import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getCurrPageFromSearch } from "../helpers";

export const usePagination = () => {
  const [search, setSearch] = useSearchParams();
  const [currPage, setCurrPage] = useState(getCurrPageFromSearch(search));

  const handlePageChanged = (pageIncrease: number) => {
    const newParams = new URLSearchParams(search);
    const newPage = currPage + pageIncrease;
    setCurrPage(newPage);
    newParams.set("page", newPage.toString());
    setSearch(newParams);
  };

  return {currPage,handlePageChanged};
};
