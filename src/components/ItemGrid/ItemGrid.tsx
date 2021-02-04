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
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  width:100%;
  @media screen and (min-width: 768px){
    flex-direction: row;
    justify-content: flex-start;
    & > * {
      flex-basis: calc(25% - 20px);
      margin: 10px;
    }
  }
`;

ItemGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemGrid;
