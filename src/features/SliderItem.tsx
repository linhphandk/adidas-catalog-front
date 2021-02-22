import React, {useState} from 'react';
import {StyledSliderImage} from './SliderItem.style';
import NA from '@Images/na.png';
import {ISliderItemProps} from './SliderItem.interface';

const SliderItem = (props:ISliderItemProps) => {
  const [image, setImage] = useState<string>(props.image);

  return (
    <StyledSliderImage
      src={image}
      className={
        props.isActive? 'active': ''
      }
      onLoad={() => {
        props.imageLoadedHandler();
      }}

      onError={() => {
        setImage(NA);
        props.imageLoadedHandler();
      }}
    />
  );
};

export default SliderItem;
