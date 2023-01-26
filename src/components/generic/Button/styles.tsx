import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px;
  font-size: 16px;
  width:100%;
  background-color: ${(props) => ` ${props.theme.colors.primary}`};

  color: ${(props) => (props.disabled ? "lightgray" : "inherit")};
  border: none;
  box-shadow: ${(props) => `0px 2px 2px ${props.theme.colors.text}50`};

  &:hover {
    ${(props) => {
      if (props.disabled)
        return `background-color: ${props.theme.colors.primary};`;
      else return `background-color: ${props.theme.colors.primary}d0;`;
    }};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
  &:active {
    ${(props) => {
      if (props.disabled)
        return `background-color: ${props.theme.colors.primary};`;
      else return `background-color: ${props.theme.colors.primary}f0;`;
    }};
  }
`;
