import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const ItemPreview:FunctionComponent<IItemPreviewProps> = (props) => {
  return (
    <StyledPreview>
      {props.text? <StyledTitle>{props.text}</StyledTitle>:<></>}

      <StyledPreviewImage src={props.image}/>
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
  height:100%;
  object-fit: contain
`;

StyledPreviewImage.displayName = 'StyledPreviewImage';

const StyledPreview = styled.div`
  position:relative;
`;

ItemPreview.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};

ItemPreview.defaultProps = {
  text: undefined,
};
interface IItemPreviewProps{
    image:string,
    text: string|undefined

}
export default ItemPreview;

