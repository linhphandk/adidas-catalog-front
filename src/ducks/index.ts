import {combineReducers} from 'redux';
import IRootReducer from './IRootReducer';
import ShoesList from './ShoesList/reducer_shoesList';
const rootReducer:IRootReducer = {
  ShoesList,
};

export default combineReducers<IRootReducer>({...rootReducer});
