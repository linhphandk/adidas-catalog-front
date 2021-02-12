import {shallow} from 'enzyme';
import React from 'react';
import Slider from './Slider';

describe('Slider', ()=>{
  it('should render 5 images', ()=>{
    const component = shallow(
        <Slider
          images={['1', '2', '3', '4', '5']}
          default={1} />);
    expect(component.find('StyledSliderImage').length).toBe(5);
  });

  it('should set the 3rd image as first', ()=>{
    const component = shallow(
        <Slider
          images={['1', '2', '3', '4', '5']}
          default={2} />);
    console.log(component.find('StyledSliderImage').first().prop('src'));
    expect(component.find('StyledSliderImage').first().prop('src')).toBe('3');
  });

  it('default image should have .active class', ()=>{
    const component = shallow(
        <Slider
          images={['1', '2', '3', '4', '5']}
          default={2} />);
    expect(
        component
            .find('StyledSliderImage')
            .first()
            .hasClass('active'),
    ).toBeTruthy();
  });

  it('should set the second image as active', ()=>{
    const component = shallow(
        <Slider
          images={['1', '2', '3', '4', '5']}
          default={0} />);
    component.find('.button__next').simulate('click');
    console.log(component.html());

    expect(
        component
            .find('StyledSliderImage')
            .at(1)
            .hasClass('active'),
    ).toBeTruthy();
  });

  it('should set the first image as active', ()=>{
    const component = shallow(
        <Slider
          images={['1', '2', '3', '4', '5']}
          default={1} />);

    component.find('.button__next').simulate('click');
    component.find('.button__prev').simulate('click');
    console.log(component.html());

    expect(
        component
            .find('StyledSliderImage')
            .at(0)
            .hasClass('active'),
    ).toBeTruthy();
  });
});
