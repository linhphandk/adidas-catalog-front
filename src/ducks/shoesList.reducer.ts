import axios, {AxiosResponse} from 'axios';
import {Reducer} from 'react';
import {SHOES_API} from '../shared';
import {IShoesList} from './shoesList.interface';

const ShoesReducer:Reducer<IShoesList, IGetShoesAction> =
  (state = {shoes: [], count: 0}, action) => {
    switch (action.type) {
      case ShoesActionTypes.GET_SHOES:
        return action.payload.data;
      default:
        return state;
    }
  };

interface IGetShoesAction{
    type: string,
    payload: AxiosResponse<IShoesList>
}

const ShoesActionTypes = {
  GET_SHOES: 'GET_SHOES',
};

export const getShoesAction = (page:number, numberOfItems: number)=>({
  type: ShoesActionTypes.GET_SHOES,
  payload: axios.get(SHOES_API+'shoes?page='+page+'&items='+numberOfItems),
});

export default ShoesReducer;
