import {combineReducers} from 'redux';
import IRootReducer from './IRootReducer';
import ShoesReducer from './Shoes/reducer_shoes';
const rootReducer:IRootReducer = {
  ShoesReducer,
};

export default combineReducers({...rootReducer});
