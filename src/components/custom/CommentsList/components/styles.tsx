import styled from "styled-components";

export const CommentWrapper = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;

`

export const CommentOwnerImage = styled.img`
    width:60px;
    height:60px;
    border-radius:50%;
    object-fit:cover;
    object-position:center;
`

export const CommentDetailsWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    padding:0px 10px;
    flex:1;
`

export const CommentCreationDetails = styled.div`
    font-style:italic;
    font-weight:300;
    font-size:12px;

    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-wrap:wrap;
`

export const Divider = styled.hr`
    width:100%;
    margin:5px 0px;
`

export const CommentText = styled.p`
    font-weight:400;
    font-size:17px;
`