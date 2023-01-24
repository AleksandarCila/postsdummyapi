import { FC } from "react";

import { Navbar } from "../Navbar";
import { PageWrapper,LayoutWrapper } from "./styles";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <PageWrapper>{children}</PageWrapper>
    </LayoutWrapper>
  );
};
