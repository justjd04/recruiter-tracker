import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: montserrat, sans-serif;
}

body {
	background-color: #F8F8F8;
}
`;

export default GlobalStyles;