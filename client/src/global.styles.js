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
    padding-top: 3vh;
  }

  .header-container {
    margin: 0 -60px;
    height: 7vh;
    border-bottom: 1px solid black;
  }  

  .super-container {


  }

  .footer {
    margin: 0 -60px;
  }

  .banner-wrapper {
    margin: 0 -60px;

  }

  .collection-header {
    margin: 0 -60px;
  }

  .footer-banner {
    margin: 0 -60px;
  }
`;
