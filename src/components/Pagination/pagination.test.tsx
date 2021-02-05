import {shallow} from 'enzyme';
import React from 'react';
import Pagination from './pagination';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
describe('Pagination', ()=>{
  it('should contain 5 items', ()=>{
    const items = [1, 2, 3, 4, 5];
    const component = shallow(
        <Pagination
          items={items}
          clickItemHandler={()=>null}
          clickPrevHandler={()=>null}
          clickNextHandler={()=>null}

        />);

    expect(component.find('StyledPaginationItem').length).toBe(5);
  });

  it('should contain page switcher items', ()=>{
    const items = [1, 2, 3, 4, 5];
    const component = shallow(<Pagination
      items={items}
      clickItemHandler={()=>null}
      clickPrevHandler={()=>null}
      clickNextHandler={()=>null}
    />);

    expect(component.find('StyledPageSwitcher').length).toBe(2);
  });

  it('should trigger the click item handler', ()=>{
    const items = [1, 2, 3, 4, 5];
    const clickItemHandler = jest.fn();
    const component = shallow(<Pagination
      items={items}
      clickItemHandler={clickItemHandler}
      clickPrevHandler={()=>null}
      clickNextHandler={()=>null}
    />);

    component.find('StyledPaginationItem').first()
        .simulate('click');
    expect(clickItemHandler).toBeCalled();
  });

  it('should trigger the click prev handler', ()=>{
    const items = [1, 2, 3, 4, 5];
    const clickPrevHandler = jest.fn(()=>{
    });
    const component = shallow(<Pagination
      items={items}
      clickItemHandler={()=>null}
      clickPrevHandler={clickPrevHandler}
      clickNextHandler={()=>null}
    />);

    component.find('StyledPageSwitcher').first()
        .simulate('click');
    expect(clickPrevHandler).toBeCalled();
  });

  it('should trigger the click next handler', ()=>{
    const items = [1, 2, 3, 4, 5];
    const clickNextHandler = jest.fn(()=>{
    });
    const component = shallow(<Pagination
      items={items}
      clickItemHandler={()=>null}
      clickPrevHandler={()=>null}
      clickNextHandler={clickNextHandler}
    />);

    component.find('StyledPageSwitcher').last()
        .simulate('click');
    expect(clickNextHandler).toBeCalled();
  });
});
