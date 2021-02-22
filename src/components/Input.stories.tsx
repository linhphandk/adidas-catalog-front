import Input from './Input';
import React from 'react';
export default {
  title: 'Components/Input',
  components: Input,
};

export const Primary = () => (
  <Input
    type="text"
    placeholder="Placeholder"
  />
);
