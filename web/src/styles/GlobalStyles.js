import { createGlobalStyle } from 'styled-components';

const GloablStyles = createGlobalStyle`
  html, body{
    width: 100vw;
    height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GloablStyles;
