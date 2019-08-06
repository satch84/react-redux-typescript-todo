import { createGlobalStyle } from 'styled-components';
import 'typeface-source-sans-pro';

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Source Sans Pro", sans-serif;
    width: 100vw;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;
