import PropTypes from 'prop-types';
import React, {FC, useEffect, useState} from 'react';
import Helpers from '@Helpers/Helpers';
import {ISliderProps} from './Slider.interface';
import ArrowIcon from '@Images/arrow.svg';
import LoadingIcon from '@Images/loading.base64';
import {
  StyledSliderWrapper,
  StyledSliderButton,
  StyledImageWrapper,
  StyledSliderImage,
  StyledLoadingIcon,
} from './Slider.style';
const Slider:FC<ISliderProps> = (props)=>{
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageIndexes, setImageIndexes] = useState<number[]>(
      Helpers.moveDefaultIndexToBegin(props.images, props.defaultIndex),
  );
  const [numberOfLoadedImages, setNumberOfLoadedImages] = useState(
    process.env.NODE_ENV === 'test' ?
      props.images.length :
      0,
  );
  const
    [touchStartPosition, setTouchStartPosition] = useState<number | null>(null);
  const [touchEndPosition, setTouchEndPosition] = useState<number | null>(null);
  useEffect(() => {
    setImageIndexes(
        Helpers.moveDefaultIndexToBegin(props.images, props.defaultIndex),
    );
  }, [props.images]);

  useEffect(() => {
    const touchDelta = touchEndPosition && touchStartPosition ?
      touchEndPosition - touchStartPosition :
      null;
    if (touchDelta === null) {
      return;
    }
    if (touchDelta > 0) {
      prevImageHandler();
    } else {
      nextImageHandler();
    }
  }, [touchEndPosition]);

  const nextImageHandler: () => void = () => {
    if (activeImageIndex + 2 > imageIndexes.length) {
      return;
    }
    setActiveImageIndex(activeImageIndex+1);
  };

  const prevImageHandler: () => void = () => {
    if (activeImageIndex - 1 < 0) {
      return;
    }
    setActiveImageIndex(activeImageIndex - 1);
  };

  const touchStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartPosition(e.changedTouches[0].pageX);
  };

  const touchEndHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndPosition(e.changedTouches[0].pageX);
  };

  const imageLoadedHandler = () => {
    setNumberOfLoadedImages(numberOfLoadedImages + 1);
  };

  return (
    <StyledSliderWrapper
      onTouchStart={touchStartHandler}
      onTouchEnd={touchEndHandler}
    >

      <StyledSliderButton
        className={
          'button__prev ' +
          (activeImageIndex > 0 ?
            'active' : '')
        }
        onClick={prevImageHandler}
        src={ArrowIcon}
      />
      <StyledImageWrapper>
        {
          props.images?.map((image) => {
            return (
              <StyledSliderImage
                key={image.shoes_image_id}
                src={image.image}
                className={
                props.images?.indexOf(image)===imageIndexes[activeImageIndex]&&
                props.images.length === numberOfLoadedImages?
                    'active' : ''
                }
                onLoad={imageLoadedHandler}
              />

            );
          })
        }
        {
          props.images.length > numberOfLoadedImages ?
            <StyledLoadingIcon src={LoadingIcon} />:''
        }
      </StyledImageWrapper>
      <StyledSliderButton
        className={
          'button__next ' +
          (activeImageIndex < props.images.length - 1 ?
            'active' : '')
        }
        onClick={nextImageHandler}
        src={ArrowIcon}
      />
    </StyledSliderWrapper>
  );
};


Slider.propTypes = {
  images: PropTypes.array.isRequired,
  defaultIndex: PropTypes.number.isRequired,
};

Slider.defaultProps = {
  defaultIndex: 0,
  images: [],
};

export default Slider;
