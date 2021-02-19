import React from 'react';
import PropTypes from 'prop-types';
import {IPaginationProps} from './Pagination.interface';
import {
  StyledPageSwitcher, StyledPagination, StyledPaginationItem,
} from './Pagination.style';

const Pagination:React.FC<IPaginationProps> = (props)=>{
  return (
    <StyledPagination>
      <StyledPageSwitcher
        className={props.prevAvailable?'active': ''}
        onClick={
          props.prevAvailable ?
            props.clickPrevHandler :
          ()=>null}
      >
        Prev
      </StyledPageSwitcher>

      {
        props.items.map((item) => (
          <StyledPaginationItem
            key={item}
            onClick={() => props.clickItemHandler(item)}
            className={props.activeValue === item?'active':''}
          >
            {item}
          </StyledPaginationItem>
        ))
      }

      <StyledPageSwitcher
        className={props.nextAvailable ? 'active' : ''}
        onClick={
          props.nextAvailable ?
          props.clickNextHandler :
          () => null
        }
      >
        Next
      </StyledPageSwitcher>
    </StyledPagination>
  );
};

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  clickItemHandler: PropTypes.func.isRequired,
  clickNextHandler: PropTypes.func.isRequired,
  clickPrevHandler: PropTypes.func.isRequired,
  activeValue: PropTypes.number.isRequired,
  prevAvailable: PropTypes.bool.isRequired,
  nextAvailable: PropTypes.bool.isRequired,
};

export default Pagination;
