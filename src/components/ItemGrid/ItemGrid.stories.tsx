import ItemGrid from './ItemGrid';

import {Meta} from '@storybook/react/types-6-0';
import React, {ReactNode} from 'react';
import ItemPreview from '../ItemPreview/ItemPreview';

export default {
  title: 'Components/ItemGridPreview',
  component: ItemGrid,
} as Meta;

const items: ReactNode[] = [];
for (let i = 0; i<10; i++) {
  items.push(
      <ItemPreview text="test" image={'https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg'}/>,
  );
}
export const Primary: React.VFC<{}> = () => (
  <ItemGrid>
    {items}
  </ItemGrid>
);
