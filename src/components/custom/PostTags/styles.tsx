import styled from "styled-components";

export const TagsWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding:10px 0px;
`

export const Tag = styled.div`
    border-radius:25px;
    font-size:14px;
    font-weight:400;
    padding:2px 10px;
    margin-right:5px;
    background-color: ${(props) => `${props.theme.colors.secondary}`}
`