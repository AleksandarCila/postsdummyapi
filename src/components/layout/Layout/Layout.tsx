import { FC } from "react";

import { Navbar } from "../Navbar";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
