import { FC } from "react";

import { PaginationButtonWrapper } from "./styles";

type PaginationButtonProps = {
  label: string;
  onClick: () => void;
  disabled: boolean;
};

export const PaginationButton: FC<PaginationButtonProps> = ({
  label,
  onClick,
  disabled,
}) => {
  return (
    <PaginationButtonWrapper disabled={disabled} onClick={onClick}>
      {label}
    </PaginationButtonWrapper>
  );
};
