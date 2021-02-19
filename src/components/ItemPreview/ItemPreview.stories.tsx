import {Meta} from '@storybook/react/types-6-0';
import React from 'react';
import ItemPreview from './ItemPreview';
import {BrowserRouter as Router} from 'react-router-dom';
export default {
  title: 'Components/ItemPreview',
  component: ItemPreview,
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Router>
    <ItemPreview
      itemId={2}
      text="test"
      image={'https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg'}/>
  </Router>
);
