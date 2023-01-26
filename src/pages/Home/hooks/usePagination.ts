import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getCurrPageFromSearch } from "../helpers";

export const usePagination = () => {
  const [search, setSearch] = useSearchParams();
  const [currPage, setCurrPage] = useState(getCurrPageFromSearch(search));

  const handlePageChanged = (pageIncrease: number) => {
    const newPage = currPage + pageIncrease;

    const newParams = new URLSearchParams(search);
    
    newParams.set("page", newPage.toString());
    setSearch(newParams);
  };

  useEffect(() => {
    setCurrPage(getCurrPageFromSearch(search))
  }, [search, setCurrPage]);

  return { currPage, handlePageChanged };
};
