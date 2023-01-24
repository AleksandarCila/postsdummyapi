import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => `${props.theme.colors.secondary}`};
`;

export const LogoText = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 0px 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: ${(props) => `${props.theme.colors.primary}`};
  }
`;

export const NewPostButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: ${(props) => ` ${props.theme.colors.primary}`};
  border: none;
  box-shadow: ${(props) => `0px 2px 2px ${props.theme.colors.text}50`};
  &:hover {
    background-color: ${(props) => `${props.theme.colors.primary}d0`};
    cursor: pointer;
  }
  &:active {
    background-color: ${(props) => `${props.theme.colors.primary}f0`};
  }
`;
