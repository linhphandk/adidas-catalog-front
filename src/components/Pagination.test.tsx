import {shallow} from 'enzyme';
import React from 'react';
import Pagination from './Pagination';
import {
  StyledPageSwitcher, StyledPaginationItem,
} from './Pagination.style';

describe('Pagination', ()=>{
  it('should contain 5 items', ()=>{
    const items = [1, 2, 3, 4, 5];
    const component = shallow(
        <Pagination
          prevAvailable={true}
          nextAvailable={true}
          items={items}
          clickItemHandler={() => null}
          clickPrevHandler={() => null}
          clickNextHandler={() => null}
          activeValue={2}
        />);

    expect(component.find(StyledPaginationItem).length).toBe(5);
  });

  it('should contain page switcher items', ()=>{
    const items = [1, 2, 3, 4, 5];
    const component = shallow(<Pagination
      prevAvailable={true}
      nextAvailable={true}
      items={items}
      clickItemHandler={()=>null}
      clickPrevHandler={()=>null}
      clickNextHandler={() => null}
      activeValue={2}
    />);

    expect(component.find(StyledPageSwitcher).length).toBe(2);
  });

  it('should trigger the click item handler', ()=>{
    const items = [1, 2, 3, 4, 5];
    const clickItemHandler = jest.fn();
    const component = shallow(<Pagination
      prevAvailable={true}
      nextAvailable={true}
      items={items}
      clickItemHandler={clickItemHandler}
      clickPrevHandler={()=>null}
      clickNextHandler={() => null}
      activeValue={2}
    />);

    component.find(StyledPaginationItem).first()
        .simulate('click');
    expect(clickItemHandler).toBeCalled();
  });

  it('should trigger the click prev handler', ()=>{
    const items = [1, 2, 3, 4, 5];
    const clickPrevHandler = jest.fn(()=>{
    });
    const component = shallow(<Pagination
      prevAvailable={true}
      nextAvailable={true}
      items={items}
      clickItemHandler={()=>null}
      clickPrevHandler={clickPrevHandler}
      clickNextHandler={() => null}
      activeValue={2}
    />);

    component.find('StyledPageSwitcher').first()
        .simulate('click');
    expect(clickPrevHandler).toBeCalled();
  });

  it('should trigger the click next handler', () => {
    const items = [1, 2, 3, 4, 5];
    const clickNextHandler = jest.fn(() => {
    });
    const component = shallow(<Pagination
      prevAvailable={true}
      nextAvailable={true}
      items={items}
      clickItemHandler={() => null}
      clickPrevHandler={() => null}
      clickNextHandler={clickNextHandler}
      activeValue={2}
    />);

    component.find('StyledPageSwitcher').last()
        .simulate('click');
    expect(clickNextHandler).toBeCalled();
  });
  it('should contain the third item with active class', () => {
    const items = [1, 2, 3, 4, 5];
    const clickNextHandler = jest.fn(() => {
    });
    const component = shallow(<Pagination
      prevAvailable={true}
      nextAvailable={true}
      items={items}
      clickItemHandler={() => null}
      clickPrevHandler={() => null}
      clickNextHandler={clickNextHandler}
      activeValue={3}
    />);

    expect(
        component
            .find(StyledPaginationItem)
            .at(items.indexOf(3))
            .hasClass('active'),
    ).toBeTruthy();
  });
  it('should find prev page switche without the active class', () => {
    const items = [1, 2, 3, 4, 5];
    const clickNextHandler = jest.fn(() => {
    });
    const component = shallow(<Pagination
      prevAvailable={false}
      nextAvailable={true}
      items={items}
      clickItemHandler={() => null}
      clickPrevHandler={() => null}
      clickNextHandler={clickNextHandler}
      activeValue={3}
    />);

    expect(
        component
            .find(StyledPageSwitcher)
            .first()
            .hasClass('active'),
    ).toBeFalsy();
  });
  it('should not call click prev handler if prevAvailable is false', () => {
    const items = [1, 2, 3, 4, 5];
    const clickPrevHandler = jest.fn(() => {
    });
    const component = shallow(<Pagination
      prevAvailable={false}
      nextAvailable={true}
      items={items}
      clickItemHandler={() => null}
      clickPrevHandler={clickPrevHandler}
      clickNextHandler={() => null}
      activeValue={3}
    />);
    component.find(StyledPageSwitcher).first().simulate('click');
    expect(
        clickPrevHandler,
    ).not.toBeCalled();
  });
  it('should contain the third item with active class', () => {
    const items = [1, 2, 3, 4, 5];
    const clickNextHandler = jest.fn(() => {
    });
    const component = shallow(<Pagination
      prevAvailable={true}
      nextAvailable={false}
      items={items}
      clickItemHandler={() => null}
      clickPrevHandler={() => null}
      clickNextHandler={clickNextHandler}
      activeValue={3}
    />);

    expect(
        component
            .find(StyledPageSwitcher)
            .last()
            .hasClass('active'),
    ).toBeFalsy();
  });

  it('should not call click next handler if nextAvailable is false', () => {
    const items = [1, 2, 3, 4, 5];
    const clickNextHandler = jest.fn(() => {
    });
    const component = shallow(<Pagination
      prevAvailable={true}
      nextAvailable={false}
      items={items}
      clickItemHandler={() => null}
      clickPrevHandler={() => null}
      clickNextHandler={clickNextHandler}
      activeValue={3}
    />);
    component.find(StyledPageSwitcher).last().simulate('click');
    expect(
        clickNextHandler,
    ).not.toBeCalled();
  });
});
