import {Meta} from '@storybook/react/types-6-0';
import Pagination from './Pagination';
import React from 'react';
export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta;

export const Primary = ()=>
  <Pagination
    prevAvailable={true}
    nextAvailable={true}
    items={[1, 2, 3, 4, 5]}
    clickItemHandler={(item)=>console.log(item)}
    clickPrevHandler={()=>console.log('prev')}
    clickNextHandler={() => console.log('next')}
    activeValue={3}
  />
;
