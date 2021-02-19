import React, {FunctionComponent, PropsWithChildren} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const ItemGrid: FunctionComponent<PropsWithChildren<IItemGrid>> = (props)=>{
  return (
    <StyledGrid>
      {props.children}
    </StyledGrid>
  );
};

interface IItemGrid {
}

const StyledGrid = styled.div`
  @media only screen and (min-width: 768px){
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
  }
  
   & > * {
    @media only screen and (min-width: 768px){
      flex-basis: calc(33.3% - 20px);
      margin: 10px;
    };
    @media only screen and (min-width: 1024px){
      flex-basis: calc(25% - 20px);
      margin: 10px;
    }
  }
`;

ItemGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemGrid;
