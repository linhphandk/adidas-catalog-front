import React from 'react';
import {shallow} from 'enzyme';
import ItemPreview from './ItemPreview';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
describe('ItemPreview Rendering', ()=>{
  it('should use the image from props', ()=>{
    const imageUrl = 'test.jpg';
    const component = shallow(<ItemPreview text="test" image={imageUrl} />);
    expect(
        component.find('StyledPreviewImage')
            .prop('src'))
        .toEqual(imageUrl);
  });
});
