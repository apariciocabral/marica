import styled from "styled-components";

export const MenuHeader = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  color: rgb(255, 255, 255);

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  li {
    margin-top: 35px;
    list-style-type: none;
    align-items: center;
  }
  
  a {
    text-decoration: none;
    font-size: 20px;
    color: black;
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
  background: darkblue;
`;

export const ContentHeader = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 130px;
  }

  button {
    font-size: 1rem;
    //color: var(--background);
    //background: var(--red-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
