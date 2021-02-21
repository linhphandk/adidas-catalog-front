import {Reducer} from 'react';
import {IShoesList} from './ShoesList/IShoesList';

export default interface IRootReducer{
    ShoesObject: Reducer<IShoesList, any>
};
