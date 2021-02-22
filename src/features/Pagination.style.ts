import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: inline-flex
`;
export const StyledPageSwitcher = styled.div`
  display:flex;
  align-items: center;
  margin: 0 15px;
  cursor: pointer;
`;

StyledPageSwitcher.displayName = 'StyledPageSwitcher';
export const StyledPaginationItem = styled.div`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &.active{
    color:white;
    background: purple;
  }
`;
