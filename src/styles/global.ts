import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.yellow.main};
  }

  body {
    ${({ theme }) => css`
      background: ${theme.background};
      color: ${theme.typography.text};
      -webkit-font-smoothing: antialiased;
    `}
  }
  
  body, input, button, textarea {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`;
