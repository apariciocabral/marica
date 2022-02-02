import styled from 'styled-components';

export const MenuHeader = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid rgb(34, 34, 34);
  z-index: 999;

  ul {
    button {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
  }

  li {
    margin-top: 30px;
    list-style-type: none;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-size: 20px;
    color: white;
  }

  transform: translateX(-300px);
  -webkit-transition: transform 0.5s 0s ease;
  -moz-transition: transform 0.5s 0s ease;
  -o-transition: transform 0.5s 0s ease;
  transition: transform 0.5s 0s ease;

  &.show {
    transform: translateX(0);
  }
`;

export const ContainerHeader = styled.header`
  background: var(--primary);
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const ContentHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 480px;
  }

  button {
    font-size: 1rem;
    color: white;
    background-color: transparent;
    border: 0;
    padding: 0;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
