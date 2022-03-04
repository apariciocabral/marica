import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MarkerStyles = styled.div`
  .marker {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    background-color: #000;
    border: 2px solid #fff;
    border-radius: 100%;
    user-select: none;
    transform: translate(-50%, -50%);
    &:hover {
      z-index: 1;
    }
  }
`;

export const MapTitle = styled(Link)`
  position: absolute;
  top: 110px;
  left: 15px;
  background-color: rgb(255, 255, 255);
  padding: 15px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 30%) 0px 1px 5px;
  z-index: 2;
  border: none;
`;
