import {Reducer} from 'react';
import {IShoesList} from './shoesList.interface';

export default interface IRootReducer{
    ShoesObject: Reducer<IShoesList, any>
};
