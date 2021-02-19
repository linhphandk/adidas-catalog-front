import PropTypes from 'prop-types';
import React,
{Dispatch, FunctionComponent, useEffect, useState} from 'react';
import {connect, MapStateToProps} from 'react-redux';
import ItemGrid from '../../components/ItemGrid/ItemGrid';
import IRootReducer from '../../ducks/IRootReducer';
import {getShoesAction} from '../../ducks/ShoesList/reducer_shoesList';
import {IShoesThumbnail} from '../../ducks/ShoesList/IShoesList';
import ItemPreview from '../../components/ItemPreview/ItemPreview';
import Pagination from '@Components/Pagination';
const HomePage: FunctionComponent<IProps> = (props) => {
  const [page, setPage] = useState(1);
  useEffect(()=>{
    props.getShoes(page);
  }, []);

  useEffect(()=>{
    props.getShoes(page);
  }, [page]);

  useEffect(()=>{
    console.log();
    if (props.shoes.length>0) {
      console.log(props.shoes[0].image);
    };
  }, [props.shoes]);

  return (
    <>
      <ItemGrid>
        {
          props.shoes.map((item:IShoesThumbnail) =>(
            <ItemPreview
              itemId={item.shoes_id}
              key={item.shoes_id}
              image={item.image}
              text={item.product_name}
            />),
          )
        }
      </ItemGrid>
      <Pagination
        items={[1, 2, 3, 4, 5]}
        clickItemHandler={(item: number) => {
          setPage(item);
        }}
        clickPrevHandler={() => {
          setPage(page - 1);
        }}
        clickNextHandler={() => {
          setPage(page + 1);
        }}
        activeValue={1}
        prevAvailable={false}
        nextAvailable={true}
      />
    </>
  );
};

interface IProps{
    getShoes: (page:number)=>void,
    shoes: IShoesThumbnail[]
}

HomePage.propTypes = {
  getShoes: PropTypes.func.isRequired,
  shoes: PropTypes.array.isRequired,
};

const mapStateToProps:MapStateToProps<
any, any, any> = (state:IRootReducer)=>({
  shoes: state.ShoesList,
});

const mapDispatchToProps = (dispatch:Dispatch<any>) =>({
  getShoes: (page:number)=> {
    dispatch(getShoesAction(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
