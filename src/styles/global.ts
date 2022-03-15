import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: rgb(45, 103, 127);
    --secondary: rgb(110, 189, 0);
    --gray: rgb(225, 225, 225);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: rgb(245, 245, 245);
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  } 

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    .button-secondary.button-outline {
    color: rgb(110, 189, 0);
    border: 1px solid rgb(110, 189, 0);
    background-color: transparent;
    }
  }


  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  // Bootstrap overrides
 
  .btn {
    border-radius: 20px;
    padding-left: 25px;
    padding-right: 25px;
  }

  .btn-primary {
    background-color: var(--primary);
    border-color: var(--primary);
   
    :hover {
      text-decoration: none;
      color: rgb(255, 255, 255);
      background-color: rgb(52, 118, 146);
      border-color: rgb(52, 118, 146);
    }
  }

  .btn-secondary {
    background-color: var(--secondary);
    border-color: var(--secondary);

    :hover {
      text-decoration: none;
      color: rgb(255, 255, 255);
      background-color: rgb(125, 215, 0);
      border-color: rgb(125, 215, 0);
    }
  }

  .btn-gray {
    background-color: var(--gray);
    border-color: var(--gray);

    :hover {
      text-decoration: none;
      background-color: rgb(235, 235, 235);
      border-color: rgb(235, 235, 235);
    }
  }

  .form-control:focus {
    border-color: transparent;
    box-shadow: none;
  }
`;
