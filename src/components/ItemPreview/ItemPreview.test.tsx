import React from 'react';
import {shallow} from 'enzyme';
import ItemPreview from './ItemPreview';
describe('ItemPreview Rendering', ()=>{
  it('should use the image from props', ()=>{
    const imageUrl = 'test.jpg';
    const component = shallow(
        <ItemPreview
          itemId={1}
          text="test"
          image={imageUrl}
        />);
    expect(
        component.find('StyledPreviewImage')
            .prop('src'))
        .toEqual(imageUrl);
  });
});
