import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        line-height: 1;
        overflow-y: hidden;
        background-color: rgb(206, 212, 218);
    }
`;

export default GlobalStyles;
