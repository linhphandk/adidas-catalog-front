import PropTypes from 'prop-types';
import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {ISliderProps} from './ISlider';

const Slider:FC<ISliderProps> = (props)=>{
  const [activeImage, setActiveImage] = useState(0);

  const nextImageHandler:()=>void = ()=>{
    setActiveImage(activeImage+1);
  };

  const prevImageHandler:()=>void = ()=>{
    setActiveImage(activeImage-1);
  };

  return (
    <StyledSliderWrapper>
      <button className="button__next" onClick={nextImageHandler}>next</button>

      {
        setDefaultFirst(props.images, props.default).map((image) => {
          return (
            <StyledSliderImage
              key={image}
              src={image}
              className={
                  props.images.indexOf(image) === activeImage ? 'active': ''
              }
            >

            </StyledSliderImage>
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

`;

StyledSliderImage.displayName='StyledSliderImage';

Slider.propTypes = {
  images: PropTypes.array.isRequired,
  default: PropTypes.number.isRequired,
};

Slider.defaultProps = {
  default: 0,
};
const setDefaultFirst:(images:string[], defaultIndex:number)=>string[] =
(images, defaultIndex) => {
  const defaultValue = images[defaultIndex];
  images.splice(defaultIndex, 1);
  images.unshift(defaultValue);
  return images;
};

export default Slider;
