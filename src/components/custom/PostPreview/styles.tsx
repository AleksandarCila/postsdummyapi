import styled from "styled-components";

export const PostPreviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    align-items: flex-start;
  }
`;

export const PostImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  padding: 0px 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PostTitle = styled.h3`
  font-weight: bold;
  padding: 10px 0px;
`;

export const PostDateLikesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
  font-size: 14px;
`;

export const PostDate = styled.span`
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  padding: 5px 0px;
`;

export const LikesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 30px;
  font-size: 14px;

  color: ${(props) => `${props.theme.colors.secondary}`};

  * {
    color: ${(props) => `${props.theme.colors.secondary}`};
    margin: 0px 5px;
  }
`;

export const PostOwner = styled.div`
  padding: 10px 0px;
  font-size: 14px;
`;
