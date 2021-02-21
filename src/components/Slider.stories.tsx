import {Meta} from '@storybook/react/types-6-0';
import ShoesImagesMock from '@Mockdata/ShoesMock';
import React from 'react';
import Slider from './Slider';

export default {
  title: 'Component/slider',
  component: Slider,
} as Meta;

export const Primary = ()=>(
  <Slider
    images={ShoesImagesMock}
    defaultIndex={0}/>
);
