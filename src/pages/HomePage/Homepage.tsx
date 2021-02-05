import PropTypes from 'prop-types';
import React,
{Dispatch, FunctionComponent, useEffect, useState} from 'react';
import {connect, MapStateToProps} from 'react-redux';
import ItemGrid from '../../components/ItemGrid/ItemGrid';
import IRootReducer from '../../ducks/IRootReducer';
import {getShoesAction} from '../../ducks/Shoes/reducer_shoes';
import IShoes from '../../ducks/Shoes/IShoes';
import ItemPreview from '../../components/ItemPreview/ItemPreview';
import Pagination from '../../components/Pagination/pagination';
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
      console.log(JSON.parse(props.shoes[0].images));
    };
  }, [props.shoes]);

  return (
    <>
      <ItemGrid>
        {
          props.shoes.map((item:IShoes) =>(
            <ItemPreview
              key={item.product_id}
              image={JSON.parse(item.images)[0]}
              text={item.product_name}
            />),
          )
        }
      </ItemGrid>
      <Pagination
        items={[1, 2, 3, 4, 5]}
        clickItemHandler={(item:number)=>{
          setPage(item);
        }}
        clickPrevHandler={()=>{
          setPage(page-1);
        }}
        clickNextHandler={()=>{
          setPage(page+1);
        }}
      />
    </>
  );
};

interface IProps{
    getShoes: (page:number)=>void,
    shoes: IShoes[]
}

HomePage.propTypes = {
  getShoes: PropTypes.func.isRequired,
  shoes: PropTypes.array.isRequired,
};

const mapStateToProps:MapStateToProps<
any, any, any> = (state:IRootReducer)=>({
  shoes: state.ShoesReducer,
});

const mapDispatchToProps = (dispatch:Dispatch<any>) =>({
  getShoes: (page:number)=> {
    dispatch(getShoesAction(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
