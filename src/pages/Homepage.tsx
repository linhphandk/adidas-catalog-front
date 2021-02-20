import PropTypes from 'prop-types';
import React, {
  Dispatch, FunctionComponent, useEffect, useState,
} from 'react';
import {connect, MapStateToProps} from 'react-redux';
import IRootReducer from '../ducks/IRootReducer';
import {getShoesAction} from '../ducks/ShoesList/reducer_shoesList';
import {IShoesObject} from '../ducks/ShoesList/IShoesList';
import ItemPreview from '@Components/ItemPreview/ItemPreview';
import Pagination from '@Components/Pagination';
import ItemGrid from '@Components/ItemGrid/ItemGrid';
import {
  StyledHeader, StyledLogo, StyledPaginationWrapper, StyledShoeList,
} from './Homepage.styles';
import Helpers from '@Helpers/Helpers';

const HomePage: FunctionComponent<IProps> = (props) => {
  const [page, setPage] = useState(1);
  const [numberOfItemsList] = useState([5, 10, 20]);
  const [numberOfItems, setNumberOfItems] = useState(numberOfItemsList[0]);
  useEffect(()=>{
    props.getShoes(page, numberOfItems);
  }, []);

  useEffect(() => {
    console.log(setPage);
    props.getShoes(page, numberOfItems);
  }, [page]);

  useEffect(()=>{
    if (props.shoesObject.shoes.length>0) {
      console.log(props.shoesObject.shoes[0].image);
    };
  }, [props.shoesObject]);

  useEffect(() => {
    if (page === 1) {
      props.getShoes(page, numberOfItems);
    } else {
      setPage(1);
    }
  }, [numberOfItems]);

  const numberOfItemsHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberOfItems(Number.parseInt(e.target.value));
  };

  return (
    <>
      <StyledHeader>
        <h1>
          {'Catalog by '}
        </h1>
        <StyledLogo src={require('@Images/logo.svg').default}/>
      </StyledHeader>
      <StyledShoeList>
        {'Items Per page: '}
        <select onChange={numberOfItemsHandler}>
          {
            numberOfItemsList.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))
          }
        </select>
        <ItemGrid>
          {
            props.shoesObject.shoes.map((item) =>(
              <ItemPreview
                itemId={item.shoes_id}
                key={item.shoes_id}
                image={item.image}
                text={item.product_name}
              />),
            )
          }
        </ItemGrid>
        <StyledPaginationWrapper>
          {console.log(Helpers.getAvailablePages(
              page,
              props.shoesObject.count,
              numberOfItems,
              5,
          ))}
          <Pagination
            items={
              Helpers.getAvailablePages(
                  page,
                  props.shoesObject.count,
                  numberOfItems,
                  5,
              )
            }
            clickItemHandler={(item: number) => {
              setPage(item);
            }}
            clickPrevHandler={() => {
              setPage(page - 1);
            }}
            clickNextHandler={() => {
              setPage(page + 1);
            }}
            activeValue={page}
            prevAvailable={page>1}
            nextAvailable={
              page < Helpers.getNumberOfPages(
                  props.shoesObject.count,
                  5,
              )}
          />
        </StyledPaginationWrapper>
      </StyledShoeList>
    </>
  );
};

interface IProps{
    getShoes: (page:number, numberOfItems: number)=>void,
    shoesObject: IShoesObject
}

HomePage.propTypes = {
  getShoes: PropTypes.func.isRequired,
  shoesObject: PropTypes.shape({
    shoes: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps:MapStateToProps<
any, any, any> = (state:IRootReducer)=>({
  shoesObject: state.ShoesObject,
});

const mapDispatchToProps = (dispatch:Dispatch<any>) =>({
  getShoes: (page:number, numberOfItems:number)=> {
    dispatch(getShoesAction(page, numberOfItems));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);