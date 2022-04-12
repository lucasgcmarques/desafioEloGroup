import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background: #EBEDEF;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
  input, button {
    font-family: 'Poppins', sans-serif;
    
  }
  h4 {
    font-weight: 300;
  }
`;

export default GlobalStyle;