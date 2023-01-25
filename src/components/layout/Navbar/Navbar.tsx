import { Button } from "../../generic";

import { NavbarWrapper, LogoText, NavLinksWrapper, NavLink } from "./styles";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <LogoText>DummyApiDemo</LogoText>
      <NavLinksWrapper>
        <NavLink to="/">
          Home
        </NavLink>
      </NavLinksWrapper>
      <Button>New Post</Button>
    </NavbarWrapper>
  );
};
