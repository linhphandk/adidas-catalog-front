import {IShoesImage} from '../ducks/shoesList.interface';
import Spooderman from './images/spooderman.jpeg';
import Cole from './images/cole.png';
import Widow from './images/widow.jpeg';
import Panther from './images/panther.jpg';
import Nasus from './images/nasus.jpg';

const ShoesImagesMock: IShoesImage[] = [
  {
    shoes_image_id: 1,
    image: Spooderman,
    is_default: true,
    fk_shoes: 1,
  },
  {
    shoes_image_id: 2,
    image: Widow,
    is_default: false,
    fk_shoes: 1,
  },
  {
    shoes_image_id: 3,
    image: Panther,
    is_default: false,
    fk_shoes: 1,
  },
  {
    shoes_image_id: 4,
    image: Nasus,
    is_default: false,
    fk_shoes: 1,
  },
  {
    shoes_image_id: 5,
    image: Cole,
    is_default: false,
    fk_shoes: 1,
  },
];

export default ShoesImagesMock;
