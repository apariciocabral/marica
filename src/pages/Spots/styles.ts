import styled from 'styled-components';

export const Pill = styled.button`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: fit-content;
  height: 30px;
  font-size: 18px;
  color: rgb(255, 255, 255);
  background-color: rgb(45, 103, 127);
  padding: 0px 20px;
  border-radius: 20px;
  border: none;
  white-space: nowrap;
  height: 40px;

  :hover {
    text-decoration: none;
    color: rgb(255, 255, 255);
    background-color: rgb(52, 118, 146);
  }
`;

export const Search = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid rgb(51, 51, 51);
  border-radius: 20px;
  background-color: rgb(255, 255, 255);

  .input {
    padding: 0px 15px;
    width: 100%;
    border: none;
    background-color: transparent;
  }
`;
