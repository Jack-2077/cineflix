import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`

html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }
  body {
    min-height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: "Google Sans Display", Roboto, Arial, sans-serif;;
    background-color:  #1f1f1f;

  }

::-webkit-scrollbar {
    width: 12px;
    background-color: hsl(225deg, 25%, 95%);
}

::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: hsl(225deg, 12%, 40%);
    border: 2px solid hsl(225deg, 25%, 95%);
}

::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: transparent;
}
`;

export default GlobalStyles;
