import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #2d677f;
    --primaryHover: #347692;
    --secondary: #6ebd00;
    --secondaryHover: #7dd700;
    --gray: #e1e1e1;
    --grayHover: #ebebeb;
    --bodyColor: #f5f5f5;
    --darkGray: #333333;
    --lightGray: #ffffff;
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
    background-color: var(--bodyColor);
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
    color: var(--secondary);
    border: 1px solid var(--secondary);
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
      color: var(--grayHover);
      background-color: var(--primaryHover);
      border-color: var(--primaryHover);
    }
  }

  .btn-secondary {
    background-color: var(--secondary);
    border-color: var(--secondary);

    :hover {
      text-decoration: none;
      color: var(--grayHover);
      background-color: var(--secondaryHover);
      border-color: var(--secondaryHover);
    }
  }

  .btn-gray {
    background-color: var(--gray);
    border-color: var(--gray);

    :hover {
      text-decoration: none;
      background-color: var(--grayHover);
      border-color: var(--grayHover);
    }
  }

  .form-control:focus {
    box-shadow: none;
  } 

  .secondary {
    color: var(--secondary);
    background-color: var(--secondary);
  }

  .primary {
    color: var(--primary);
  }
`;
