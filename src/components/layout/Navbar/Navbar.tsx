import React from "react";

import { NavbarWrapper, LogoText, NavLinksWrapper, NavLink,NewPostButton } from "./styles";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <LogoText>DummyApiDemo</LogoText>
      <NavLinksWrapper>
        <NavLink to="/">
          Home
        </NavLink>
      </NavLinksWrapper>
      <NewPostButton>New Post</NewPostButton>
    </NavbarWrapper>
  );
};
