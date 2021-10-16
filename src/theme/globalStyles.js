import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    min-height: 100%;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }
`;