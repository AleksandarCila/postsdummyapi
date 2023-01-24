import styled from "styled-components";

export const PostWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
`

export const PostCreationDetails = styled.div`
    font-weight:300;
    font-style:italic;
    padding:10px 0px;
`

export const PostImage = styled.img`
    width:100%;
    object-fit:cover;
    object-position:center;
    height:250px;
`

export const PostText = styled.p`
    padding:10px 0px;
`

export const LikesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;

  color: ${(props) => `${props.theme.colors.secondary}`};

  * {
    color: ${(props) => `${props.theme.colors.secondary}`};
    margin-right: 5px;
  }
`;