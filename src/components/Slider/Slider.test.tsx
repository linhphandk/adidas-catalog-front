import {mount, shallow} from 'enzyme';
import React from 'react';
import { IShoeImage } from '../../pages/ShoePage/ShoePage';
import Slider from './Slider';
const shoeImages: IShoeImage[] = [{
  shoes_image_id: 1,
  image: '1',
  fk_shoes: 1,
  is_default: true
},
{
  shoes_image_id: 2,
  image: '2',
  fk_shoes: 1,
  is_default: true
},
{
  shoes_image_id: 3,
  image: '3',
  fk_shoes: 1,
  is_default: true
},
{
  shoes_image_id: 4,
  image: '4',
  fk_shoes: 1,
  is_default: true
},
{
  shoes_image_id: 5,
  image: '5',
  fk_shoes: 1,
  is_default: true
},]

describe('Slider', ()=>{
  it('should render 5 images', ()=>{
    const component = shallow(
        <Slider
          images={shoeImages}
          defaultIndex={1} />);
    expect(component.find('StyledSliderImage').length).toBe(5);
  });

  it('default image should have .active class', ()=>{
    const component = shallow(
        <Slider
          images={shoeImages}
        defaultIndex={2} />);

    expect(
      component
        .find('StyledSliderImage')
        .at(2)
        .hasClass('active')
    ).toBeTruthy();
  });

  it('should set the second image as active', ()=>{
    const component = shallow(
        <Slider
          images={shoeImages}
        defaultIndex={1} />);
    expect(
        component
        .find('StyledSliderImage')
        .at(1)
      .hasClass('active')
    ).toBeTruthy();
  });

  it('should set the 2nd image as active after clicking next', ()=>{
    const component = shallow(
      <Slider
        images={shoeImages}
        defaultIndex={0}
      />
    );

    component.find('.button__next').simulate('click');

    expect(
        component
            .find('StyledSliderImage')
            .at(1)
            .hasClass('active'),
    ).toBeTruthy();
  });
  it('should not be able to go to previous when on first image', () => { 
    const component = shallow(
      <Slider
        images={shoeImages}
        defaultIndex={0}
      />
    );

    component.find('.button__prev').simulate('click');
    expect(
      component
        .find('StyledSliderImage')
        .at(0)
        .hasClass('active'),
    ).toBeTruthy();
  })

  it('should not be able to go to next when on last image', () => {
    const component = shallow(
      <Slider
        images={shoeImages}
        defaultIndex={0}
      />
    );
    for (let i = 0; i < shoeImages.length; i++) {
      component.find('.button__next').simulate('click');
    }
    console.log(component.html())

    expect(
      component
        .find('StyledSliderImage')
        .last()
        .hasClass('active'),
    ).toBeTruthy();
  })
});
