import React from 'react';
import PropTypes from 'prop-types';
import {IPaginationProps} from './IPagination';
import styled from 'styled-components';

const Pagination:React.FC<IPaginationProps> = (props)=>{
  return (
    <div>
      <StyledPageSwitcher
        onClick={()=>props.clickPrevHandler()}
      >
        Prev
      </StyledPageSwitcher>

      {props.items.map((item)=>(
        <StyledPaginationItem
          key={item}
          onClick={()=>props.clickItemHandler(item)}>
          {item}
        </StyledPaginationItem>
      ),
      )}
      <StyledPageSwitcher
        onClick={()=>props.clickNextHandler()}
      >
        Next

      </StyledPageSwitcher>

    </div>
  );
};

const StyledPageSwitcher = styled.div`

`;

StyledPageSwitcher.displayName='StyledPageSwitcher';
const StyledPaginationItem = styled.div`

`;
StyledPaginationItem.displayName='StyledPaginationItem';
Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  clickItemHandler: PropTypes.func.isRequired,
  clickNextHandler: PropTypes.func.isRequired,
  clickPrevHandler: PropTypes.func.isRequired,

};

export default Pagination;
