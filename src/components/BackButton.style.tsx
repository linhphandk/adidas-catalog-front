import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const StyledBackArrow = styled.img`
  height:100%;
  transform: rotate(180deg);
  margin-right: 5px;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  height: 17px;
`;

export const StyledBackButton = styled.div`
  display:inline-block;
  &>a{
    text-decoration:none;
    color: black;
  }
`;
