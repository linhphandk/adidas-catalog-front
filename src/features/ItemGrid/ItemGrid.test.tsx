import {shallow} from 'enzyme';
import ItemGrid from './ItemGrid';
import React from 'react';
describe('Item Grid', ()=>{
  it('should contain 3 items', ()=>{
    const component = shallow(
        <ItemGrid>
          <div></div>
          <div></div>
          <div></div>
        </ItemGrid>);

    expect(component.children().length).toBe(3);
  });
});
