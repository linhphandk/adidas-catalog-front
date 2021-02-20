import {Reducer} from 'react';
import {IShoesObject} from './ShoesList/IShoesList';

export default interface IRootReducer{
    ShoesObject: Reducer<IShoesObject, any>
};
