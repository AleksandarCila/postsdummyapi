import styled from "styled-components";

export const PaginationButtonWrapper = styled.button`
  padding: 2px;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;
