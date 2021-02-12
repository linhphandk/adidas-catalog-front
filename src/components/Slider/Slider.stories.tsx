import {Meta} from '@storybook/react/types-6-0';
import React from 'react';
import Slider from './Slider';

const Spooderman = require('../../mockdata/images/spooderman.jpeg');
export default {
  title: 'Component/slider',
  component: Slider,
} as Meta;

export const Primary = ()=>(
  <Slider
    images={[Spooderman]}
    default={0}/>

);
