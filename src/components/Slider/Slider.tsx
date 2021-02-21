import PropTypes from 'prop-types';
import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import Helpers from '../../helpers/Helpers';
import {ISliderProps} from './ISlider';
import ArrowIcon from '@Images/arrow.svg';
const Slider:FC<ISliderProps> = (props)=>{
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageIndexes, setImageIndexes] = useState<number[]>(
      Helpers.moveDefaultIndexToBegin(props.images, props.defaultIndex),
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

  return (
    <StyledSliderWrapper
      onTouchStart={touchStartHandler}
      onTouchEnd={touchEndHandler}
    >
      <StyledSliderButton
        className={
          'button__next ' +
  (activeImageIndex < props.images.length - 1 ?
            'active': '')
        }
        onClick={nextImageHandler}
        src={ArrowIcon}
      />
      {
        props.images?.map((image) => {
          return (
            <StyledSliderImage
              key={image.shoes_image_id}
              src={image.image}
              className={
                props.images?.indexOf(image) === imageIndexes[activeImageIndex]?
                  'active' : ''
              }
            />

          );
        })
      }
      <StyledSliderButton
        className={
          'button__prev ' +
          (activeImageIndex > 0 ?
            'active' : '')
        }
        onClick={prevImageHandler}
        src={ArrowIcon}
      />
    </StyledSliderWrapper>
  );
};

const StyledSliderWrapper = styled.div`
width:100%;
height:300px;
position:relative;
`;


const StyledSliderImage = styled.img`
  display:none;
  width:100%;
  height:100%;
  object-fit: cover;
  &.active{
    display:block
  }
`;

const StyledSliderButton = styled.img`
position:absolute;
top:50%;
transform: translateY(-50%);
height:10%;
opacity: 0.5;
&.button__next{
  right:0
}
&.button__prev{
  transform: rotate(180deg) translateY(50%);
}
&.active{
  opacity:1
}
`;

StyledSliderImage.displayName='StyledSliderImage';

Slider.propTypes = {
  images: PropTypes.array.isRequired,
  defaultIndex: PropTypes.number.isRequired,
};

Slider.defaultProps = {
  defaultIndex: 0,
  images: [],
};

export default Slider;
