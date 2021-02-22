import SliderItem from './SliderItem';
import React from 'react';
import Spooderman from '@Mockdata/images/spooderman.jpeg';
export default {
  title: 'Components/Slider item',
  component: SliderItem,
};

export const Primary = () => (
  <SliderItem
    imageLoadedHandler={() => { }}
    isActive={true}
    image={Spooderman}
  />
);
