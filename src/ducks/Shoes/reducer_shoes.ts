import axios, {AxiosResponse} from 'axios';
import {Reducer} from 'react';
import IShoes from './IShoes';

const ShoesReducer:Reducer<IShoes[], IGetShoesAction> = (state = [], action)=>{
  switch (action.type) {
    case ShoesActionTypes.GET_SHOES:
      return action.payload.data;
    default:
      return state;
  }
};

interface IGetShoesAction{
    type: string,
    payload: AxiosResponse<IShoes[]>
}

const ShoesActionTypes = {
  GET_SHOES: 'GET_SHOES',
};

export const getShoesAction = {
  type: ShoesActionTypes.GET_SHOES,
  payload: axios.get('http://localhost:8001/shoes?page=3&items=10'),
};

export default ShoesReducer;
