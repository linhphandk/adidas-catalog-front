import Input from './Input';
import React from 'react';
export default {
  title: 'Components/Input',
  component: Input,
};

export const Primary = () => (
  <Input
    type="text"
    placeholder="Placeholder"
  />
);
