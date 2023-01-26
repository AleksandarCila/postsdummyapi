import styled from "styled-components";

export const PostFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 20px 0px;

  width: 100%;
`;

export const FormLabel = styled.div`
  padding: 10px 0px;
`;

export const TwoColumnGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  width: 100%;

  padding: 10px 0px;

  &:nth-child(1) {
    padding-right: 10px;
  }

  &:nth-child(2) {
    padding-left: 10px;
  }

  @media screen and (max-width: 768px) {
    &:nth-child(1) {
      padding-right: 0px;
    }

    &:nth-child(2) {
      padding-left: 0px;
    }
  }
`;

export const ErrorWrapper = styled.div`
  display:flex;
  justify-content:center;
  padding:20px;
  color: red;
  width:100%;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding:20px;
  width:200px;
  align-self:center;
  `;
