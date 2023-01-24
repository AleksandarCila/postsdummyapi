import { FC } from "react";

import { TitleWrapper } from "./styles";

type TitleProps = {
  title: string;
};

export const Title: FC<TitleProps> = ({ title }) => {
  return <TitleWrapper>{title}</TitleWrapper>;
};
