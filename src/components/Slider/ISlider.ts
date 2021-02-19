import {IShoeImage} from '../../pages/ShoePage/ShoePage';

export interface ISliderProps{
    images:IShoeImage[]|undefined,
    defaultIndex: number
}
