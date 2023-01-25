import styled from "styled-components";

export const StyledButton = styled.button`
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
