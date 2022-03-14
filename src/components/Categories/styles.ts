import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PillStyles = styled(Link)`
  border-radius: 20px;
`;

export const CategoryOverflow = styled.div`
  ul.overflow-x {
    overflow-x: scroll;
  }

  @media screen and (max-width: 767px) {
    ul.overflow-sm-x {
      flex-wrap: nowrap;
    }
  }
`;
