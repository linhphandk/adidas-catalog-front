import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const ItemPreview:FunctionComponent<IItemPreviewProps> = (props) => {
  return (
    <StyledPreview>
      <Link to={'shoes/'+props.itemId}>
        {props.text? <StyledTitle>{props.text}</StyledTitle>:<></>}

        <StyledPreviewImage src={props.image}/>
      </Link>
    </StyledPreview>
  );
};
const StyledTitle = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const StyledPreviewImage = styled.img`
  width:100%;
  height:200px;
  object-fit: contain
`;

StyledPreviewImage.displayName = 'StyledPreviewImage';

const StyledPreview = styled.div`
  position:relative;
`;

ItemPreview.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  itemId: PropTypes.number.isRequired,
};

ItemPreview.defaultProps = {
  text: undefined,
};
interface IItemPreviewProps{
    image:string,
    text: string|undefined,
    itemId: number

}
export default ItemPreview;

