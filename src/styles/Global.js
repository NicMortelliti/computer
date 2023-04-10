import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
}

html {

}

body {
  display: flex;
  place-items: center;
  justify-content: center;
  background: black;
  color: white;
  min-height: 100vh;
}
`;

export default GlobalStyles;
