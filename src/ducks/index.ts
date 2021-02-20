import {combineReducers} from 'redux';
import IRootReducer from './IRootReducer';
import ShoesObject from './ShoesList/reducer_shoesList';
const rootReducer:IRootReducer = {
  ShoesObject,
};

export default combineReducers<IRootReducer>({...rootReducer});
