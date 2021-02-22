import Button from '@Components/Button';
import Input from '@Components/Input';
import TextArea from '@Components/TextArea';
import {shallow} from 'enzyme';
import React from 'react';
import ReviewForm from './ReviewForm';
import {StyledStarImage} from './ReviewForm.style';

describe('Review Form', () => {
  it('should show 0 stars', () => {
    const component = shallow(
        <ReviewForm
          maxRating={5}
          submitHandler={() => { }}
        />);
    const numberOfActiveStars = component.find(StyledStarImage).length;
    expect(numberOfActiveStars).toBe(5);
  });
  it('should show 4 stars', () => {
    const component = shallow(
        <ReviewForm
          maxRating={5}
          submitHandler={() => { }}
        />);
    component.find(StyledStarImage).at(3).simulate('click');
    expect(component.find(StyledStarImage).find('.active').length).toBe(4);
  });

  it('should show 2 stars on mouseover', () => {
    const component = shallow(<ReviewForm
      maxRating={5}
      submitHandler={() => { }}
    />);
    component.find(StyledStarImage).at(1).simulate('mouseover');
    expect(component.find(StyledStarImage).find('.active').length).toBe(2);
  });

  it('should trigger the submit handler', () => {
    const submitHandler = jest.fn();
    const component = shallow(<ReviewForm
      maxRating={5}
      submitHandler={submitHandler}
    />);
    const userName = 'username text';
    const comment = 'comment text';
    component.find(Input).simulate('change', {target: {value: userName}});
    component.find(TextArea)
        .simulate('change', {target: {value: comment}});
    component.find(StyledStarImage).at(3).simulate('click');
    component.find(Button).simulate('click');
    expect(submitHandler).toBeCalled();
  });

  it('should trigger the submit handler', () => {
    const submitHandler = jest.fn();
    const component = shallow(<ReviewForm
      maxRating={5}
      submitHandler={submitHandler}
    />);
    const userName = 'username text';
    const comment = 'comment text';
    component.find(Input).simulate('change', {target: {value: userName}});
    component.find(TextArea)
        .simulate('change', {target: {value: comment}});
    component.find(StyledStarImage).at(3).simulate('click');
    component.find(Button).simulate('click');
    expect(submitHandler)
        .toBeCalledWith(userName, 4, comment, expect.anything());
  });

  it('should reset the form on submit', () => {
    const cb = (
        userName: string,
        rating: number,
        comment: string,
        resetFormHandler: () => void) => {
      resetFormHandler();
    };
    const component = shallow(<ReviewForm
      maxRating={5}
      submitHandler={cb}
    />);
    const userName = 'username text';
    const comment = 'comment text';
    const TextAreaComponent = component.find(TextArea);
    const InputComponent = component.find(Input);
    const StarsComponents = component.find(StyledStarImage);

    InputComponent.simulate('change', {target: {value: userName}});
    TextAreaComponent.simulate('change', {target: {value: comment}});
    StarsComponents.at(3).simulate('click');
    component.find(Button).simulate('click');

    expect(InputComponent.props().value).toBe('');
    expect(TextAreaComponent.props().value).toBe('');
    expect(
        component.find('StyledStarImage.active').length,
    ).toBe(0);
  });
});
