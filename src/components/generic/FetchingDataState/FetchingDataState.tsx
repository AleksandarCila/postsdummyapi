import { FC } from "react";

import { Loader, ErrorCheck } from "./components";

type FetchingDataStateProps = {
  isLoading: boolean;
  error: string | unknown;
  children: React.ReactNode;
};

export const FetchingDataState: FC<FetchingDataStateProps> = ({
  isLoading,
  error,
  children,
}) => {
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ErrorCheck error={error}>{children}</ErrorCheck>
      )}
    </div>
  );
};
