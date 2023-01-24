import { FC } from "react";

import { PaginationButton } from "./components";

import { PaginationWrapper } from "./styles";

type PaginationProps = {
  currPage: number;
  total: number;
  perPage: number;
  onChange: (pageIncrease:number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  currPage,
  total,
  perPage,
  onChange
}) => {
  const totalPages = Math.ceil(total / perPage);

  const handlePreviousPage = () => {
    onChange(-1);
  };

  const handleNextPage = () => {
    onChange(+1)
  };

  return (
    <PaginationWrapper>
      <PaginationButton
        label="<"
        onClick={handlePreviousPage}
        disabled={currPage === 0}
      />
      {currPage} out of {totalPages}
      <PaginationButton
        label=">"
        onClick={handleNextPage}
        disabled={currPage === totalPages}
      />
    </PaginationWrapper>
  );
};
