import { FC } from "react";

type ErrorCheckProps = {
  error: string | unknown;
  children?: React.ReactNode;
};

export const ErrorCheck: FC<ErrorCheckProps> = ({ error, children }) => {
  return (
    <div>{error ? <div>{`Error fetching data! ${error}`}</div> : children}</div>
  );
};
