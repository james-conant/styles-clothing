import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    font-family: "Open Sans Condensed";
    padding: 0px 60px 0px 60px;
    @media screen and (max-width: 800px) {
        padding: 10px;
    }
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }

  .header {
    margin: 0 -60px;
  }  

  .footer {
    margin: 0 -60px;
  }

  .page-banner {
    margin: 0 -60px;

  }
`;
