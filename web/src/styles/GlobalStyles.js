import { createGlobalStyle } from 'styled-components';

const GloablStyles = createGlobalStyle`
  html, body{
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GloablStyles;
