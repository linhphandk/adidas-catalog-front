import PropTypes from 'prop-types';
import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import Helpers from '../../helpers/Helpers';
import {ISliderProps} from './ISlider';

const Slider:FC<ISliderProps> = (props)=>{
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageIndexes, setImageIndexes] = useState<number[]>(
    Helpers.moveDefaultIndexToBegin(props.images, props.defaultIndex)
  )
  const [touchStartPosition, setTouchStartPosition] = useState < number | null>(null)
  const [touchEndPosition, setTouchEndPosition] = useState<number | null>(null)

  useEffect(() => { 
    setImageIndexes(
      Helpers.moveDefaultIndexToBegin(props.images, props.defaultIndex)
    )
  }, [props.images])
  
  const nextImageHandler: () => void = () => {
    if (activeImageIndex + 2 > imageIndexes.length)
      return
    setActiveImageIndex(activeImageIndex+1);
  };

  const prevImageHandler: () => void = () => {
    if (activeImageIndex - 1 < 0) { 
      return
    }
    setActiveImageIndex(activeImageIndex - 1);
  };

  const touchStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartPosition(e.changedTouches[0].pageX)
    
  };

  const touchEndHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndPosition(e.changedTouches[0].pageX)
    const touchDelta = touchEndPosition && touchStartPosition ?
      touchEndPosition - touchStartPosition :
      null

    if (touchDelta === null) {
      return
    }
    if (touchDelta > 0) {
      prevImageHandler()
    } else {
      nextImageHandler()
    }
  };
  
  return (
    <StyledSliderWrapper
      onTouchStart={touchStartHandler}
      onTouchEnd={touchEndHandler}
    >
      <button className="button__next" onClick={nextImageHandler}>next</button>
      {
        props.images?.map((image) => {
          return (
            <StyledSliderImage
              key={image.shoes_image_id}
              src={image.image}
              className={
                  props.images?.indexOf(image) === imageIndexes[activeImageIndex] ? 'active': ''
              }
            />
           
          );
        })
      }
      <button className="button__prev" onClick={prevImageHandler}>prev</button>

    </StyledSliderWrapper>
  );
};

const StyledSliderWrapper = styled.div`

`;


const StyledSliderImage = styled.img`
  display:none;
  &.active{
    display:block
  }
`;

StyledSliderImage.displayName='StyledSliderImage';

Slider.propTypes = {
  images: PropTypes.array,
};

Slider.defaultProps = {
  defaultIndex: 0,
  images: []
};

export default Slider;
