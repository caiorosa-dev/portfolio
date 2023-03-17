import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    outline: 0;
    border: none;
    text-decoration: none;
  }

  body {
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
