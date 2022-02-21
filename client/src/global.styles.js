import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    font-family: "Open Sans Condensed";
    // padding: 0px 60px 0px 60px;
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
  }

  .header-container {
    position: fixed;
    border-bottom: 1px solid black;
    width: 100%;
    z-index: 1;
  }  

  .super-container {


  }
`;
