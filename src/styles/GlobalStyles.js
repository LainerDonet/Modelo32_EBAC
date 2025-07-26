// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  input {
    font-family: inherit;
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #root {
    min-height: 100vh;
  }
`;

export default GlobalStyles;