import {combineReducers} from 'redux';
import IRootReducer from './IRootReducer';
import ShoesObject from './shoesList.reducer';
const rootReducer:IRootReducer = {
  ShoesObject,
};

export default combineReducers<IRootReducer>({...rootReducer});
