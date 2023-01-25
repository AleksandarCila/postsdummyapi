import { Link } from "react-router-dom";

import { Button } from "../../generic";

import { NavbarWrapper, LogoText, NavLinksWrapper, NavLink } from "./styles";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <LogoText>DummyApiDemo</LogoText>
      <NavLinksWrapper>
        <NavLink to="/">Home</NavLink>
      </NavLinksWrapper>
      <Link to="/create">
        <Button>New Post</Button>
      </Link>
    </NavbarWrapper>
  );
};
