import {mount, shallow} from 'enzyme';
import ShoesImagesMock from '@Mockdata/ShoesMock';
import React from 'react';
import Slider from './Slider';
import {JSDOM} from 'jsdom';
const doc = new JSDOM('<!doctype html><html><body></body></html>');
global.document = doc.window.document;
global.window = doc.window as unknown as Window & typeof globalThis;
describe('Slider', ()=>{
  it('should render 5 images', ()=>{
    const component = shallow(
        <Slider
          images={ShoesImagesMock}
          defaultIndex={1} />);
    expect(component.find('StyledSliderImage').length).toBe(5);
  });

  it('default image should have .active class', ()=>{
    const component = shallow(
        <Slider
          images={ShoesImagesMock}
          defaultIndex={2} />);

    expect(
        component
            .find('StyledSliderImage')
            .at(2)
            .hasClass('active'),
    ).toBeTruthy();
  });

  it('should set the second image as active', ()=>{
    const component = shallow(
        <Slider
          images={ShoesImagesMock}
          defaultIndex={1} />);
    expect(
        component
            .find('StyledSliderImage')
            .at(1)
            .hasClass('active'),
    ).toBeTruthy();
  });

  it('should set the 2nd image as active after clicking next', ()=>{
    const component = shallow(
        <Slider
          images={ShoesImagesMock}
          defaultIndex={0}
        />,
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
          images={ShoesImagesMock}
          defaultIndex={0}
        />,
    );

    component.find('.button__prev').simulate('click');
    expect(
        component
            .find('StyledSliderImage')
            .at(0)
            .hasClass('active'),
    ).toBeTruthy();
  });

  it('should not be able to go to next when on last image', () => {
    const component = shallow(
        <Slider
          images={ShoesImagesMock}
          defaultIndex={0}
        />,
    );
    for (let i = 0; i < ShoesImagesMock.length; i++) {
      component.find('.button__next').simulate('click');
    }

    expect(
        component
            .find('StyledSliderImage')
            .last()
            .hasClass('active'),
    ).toBeTruthy();
  });

  it('should set the secont image as active on left swipe', async (done) => {
    const component = mount(
        <Slider
          images={ShoesImagesMock}
          defaultIndex={0}
        />,
    );

    component.simulate('touchstart', {
      changedTouches: [
        {
          pageX: 150,
        },
      ],
    });
    component.simulate('touchend', {
      changedTouches: [
        {
          pageX: 4,
        },
      ],
    });

    expect(
        component
            .find('StyledSliderImage')
            .at(1)
            .hasClass('active'),
    ).toBeTruthy();
    done();
  });
  it('should set the first image as active on right swipe', async (done) => {
    const component = mount(
        <Slider
          images={ShoesImagesMock}
          defaultIndex={0}
        />,
    );

    component.simulate('touchstart', {
      changedTouches: [
        {
          pageX: 150,
        },
      ],
    });
    component.simulate('touchend', {
      changedTouches: [
        {
          pageX: 4,
        },
      ],
    });

    component.simulate('touchstart', {
      changedTouches: [
        {
          pageX: 1,
        },
      ],
    });
    component.simulate('touchend', {
      changedTouches: [
        {
          pageX: 150,
        },
      ],
    });

    expect(
        component
            .find('StyledSliderImage')
            .first()
            .hasClass('active'),
    ).toBeTruthy();
    done();
  });
});
