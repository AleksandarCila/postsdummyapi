import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Mulish','Open Sans', sans-serif; 
       color: #251605;
   }
   #root{
       margin:0 auto;
   }
   a{
    text-decoration:none;
    color:inherit;
   }
`;
