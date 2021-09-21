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

  .content {
    padding-top: 10vh;
  }

  .header {
    margin: 0 -60px;
    height: 10vh;
    border-bottom: 1px solid black;
  }  

  .footer {
    margin: 0 -60px;
  }

  .page-banner {
    margin: 0 -60px;

  }
`;
