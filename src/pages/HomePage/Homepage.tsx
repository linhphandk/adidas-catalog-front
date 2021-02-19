import PropTypes from 'prop-types';
import React,
{Dispatch, FunctionComponent, useEffect} from 'react';
import {connect, MapStateToProps} from 'react-redux';
import ItemGrid from '../../components/ItemGrid/ItemGrid';
import IRootReducer from '../../ducks/IRootReducer';
import {getShoesAction} from '../../ducks/Shoes/reducer_shoes';
import IShoes from '../../ducks/Shoes/IShoes';
import ItemPreview from '../../components/ItemPreview/ItemPreview';
const HomePage: FunctionComponent<IProps> = (props) => {
  useEffect(()=>{
    props.getShoes();
  }, []);

  useEffect(()=>{
    console.log();
    if (props.shoes.length>0) {
      console.log(JSON.parse(props.shoes[0].images));
    };
  }, [props.shoes]);

  return (
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
  );
};

interface IProps{
    getShoes: ()=>void,
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
  getShoes: ()=> {
    dispatch(getShoesAction);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
