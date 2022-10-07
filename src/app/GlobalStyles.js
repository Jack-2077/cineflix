import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`

    html { box-sizing: border-box;}

  *, *:before, *:after { box-sizing: inherit; }

    html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    }

    body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
               'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyles;