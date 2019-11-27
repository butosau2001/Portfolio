import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: "Roboto", sans-serif;

    background-color: #555;
    color: white;

    height: 100vh;
    width: 100vw;
    overflow:hidden;

    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;

export const colors = {
  selected: "#1976D2",
  notSelected: "#888"
};
