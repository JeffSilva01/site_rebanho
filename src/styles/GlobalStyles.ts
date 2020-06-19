import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  :root {
    --primary: #f6a31c;
    --secondary: #581518;

    --black: #000;
    --white: #fff;
  }

`;
