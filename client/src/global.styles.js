import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  font-size: 62.5%;
}

body {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
    font-weight: 700;
  }
  
  * {
    box-sizing: border-box;
  }
`;
