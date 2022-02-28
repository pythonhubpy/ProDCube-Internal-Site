import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //background-color: white;
    font-family: "Teko", sans-serif;
    background: #1C1E21;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  #__next {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .ProseMirror-focused {
    outline: none;
  }
`;
