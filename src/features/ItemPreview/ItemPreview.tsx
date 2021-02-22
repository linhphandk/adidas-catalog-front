import React, {FunctionComponent} from 'react';
import PropTypes from 'prop-types';
import {
  StyledLink,
  StyledPreview,
  StyledPreviewImage,
  StyledTitle,
} from './ItemPreview.style';
import {IItemPreviewProps} from './ItemPreview.interface';

const ItemPreview: FunctionComponent<IItemPreviewProps> = (props) => {
  return (
    <StyledPreview>
      <StyledLink to={'shoes/'+props.itemId}>
        <StyledPreviewImage src={props.image} />
        {
          props.text ?
            <StyledTitle>{props.text}</StyledTitle> :
            <></>
        }
      </StyledLink>
    </StyledPreview>
  );
};

ItemPreview.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  itemId: PropTypes.number.isRequired,
};

ItemPreview.defaultProps = {
  text: undefined,
};

export default ItemPreview;

