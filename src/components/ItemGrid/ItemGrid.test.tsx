import {shallow} from 'enzyme';
import ItemGrid from './ItemGrid';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
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
