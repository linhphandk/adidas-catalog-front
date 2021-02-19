import axios, {AxiosResponse} from 'axios';
import {Reducer} from 'react';
import {SHOES_API} from '../../shared';
import {IShoesThumbnail} from './IShoesList';

const ShoesReducer:Reducer<IShoesThumbnail[], IGetShoesAction> =
  (state = [], action) => {
  switch (action.type) {
    case ShoesActionTypes.GET_SHOES:
      return action.payload.data;
    default:
      return state;
  }
};

interface IGetShoesAction{
    type: string,
    payload: AxiosResponse<IShoesThumbnail[]>
}

const ShoesActionTypes = {
  GET_SHOES: 'GET_SHOES',
};

export const getShoesAction = (page:number)=>({
  type: ShoesActionTypes.GET_SHOES,
  payload: axios.get(SHOES_API+'shoes?page='+page+'&items=10'),
});

export default ShoesReducer;
