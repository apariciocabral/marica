import styled from 'styled-components';

export const MenuHeader = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  padding: 35px;
  background-color: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid rgb(34, 34, 34);
  z-index: 999;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #333;
  }

  .btn-close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    align-items: center;
    border-bottom: 1px solid #333;
    padding: 8px 0;
  }

  a {
    text-decoration: none;
    color: white;

    svg {
      margin-right: 15px;
    }
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

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
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

export const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 998;
  border: none;
  cursor: default !important;
  backdrop-filter: blur(2px);

  &.show {
    display: block;
  }
`;
