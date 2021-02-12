import {Reducer} from 'react';
import {IShoesThumbnail} from './ShoesList/IShoesList';

export default interface IRootReducer{
    ShoesList: Reducer<IShoesThumbnail[], any>
};
