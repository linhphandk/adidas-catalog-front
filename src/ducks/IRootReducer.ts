import {Reducer} from 'react';
import IShoes from './Shoes/IShoes';

export default interface IRootReducer{
    ShoesReducer: Reducer<IShoes[], any>
};
