import React, {FunctionComponent, useState} from 'react';
import PropTypes from 'prop-types';
import {
  StyledLink,
  StyledLoadingIcon,
  StyledPreview,
  StyledPreviewImage,
  StyledTitle,
} from './ItemPreview.style';
import LoadingIcon from '@Images/loading.base64';
import {IItemPreviewProps} from './ItemPreview.interface';

const ItemPreview: FunctionComponent<IItemPreviewProps> = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <StyledPreview>
      <StyledLink to={'shoes/'+props.itemId}>
        <StyledPreviewImage
          src={props.image}
          className={
            isLoaded ? '' : 'hide'
          }
          onLoad={()=>{
            setIsLoaded(true);
          }}
        />
        <StyledLoadingIcon
          src={LoadingIcon}
          className={
            isLoaded ? 'hide' : ''
          }
        />
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

