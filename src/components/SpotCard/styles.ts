import styled from 'styled-components';

export const Pill = styled.button`
  color: rgb(102, 102, 102);
  background-color: rgb(238, 238, 238);
  border-radius: 20px;
  margin: 0px 10px 10px 0px;
  padding: 0px 20px;
  text-decoration: none;
  font-size: 12px;
  border: 1px solid rgb(238, 238, 238);

  :hover {
    background-color: rgb(251, 251, 251);
    border: 1px solid rgb(238, 238, 238);
  }
`;

export const Cover = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
`;
