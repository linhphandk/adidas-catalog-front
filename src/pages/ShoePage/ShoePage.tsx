/* eslint-disable camelcase */
import axios, {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import {SHOES_API} from '../../shared';

const ShoePage: React.FC = (props)=>{
  const {id} = useParams<IUrlParams>();
  const [shoes, setShoes] = useState<IShoesDetail|undefined>();
  useEffect(()=>{
    axios.get(SHOES_API+'shoes/detail/'+id).then(
        (result: AxiosResponse<IShoesDetail>)=>{
          setShoes(result.data);
        });
  }, []);
  return (
    <div>
      {shoes ? <div>{shoes.shoesDetail.shoes_id}</div> : 'loading'}
      <Slider
        defaultIndex={
          0
        }
        images={shoes?.images ? shoes.images : []}/>
    </div>);
};
interface IUrlParams{
  id: string
}

interface IShoesDetail{
  shoesDetail: {
    shoes_id: number
  },
  images: IShoeImage[]
}
export interface IShoeImage {
  shoes_image_id: number,
  image: string,
  fk_shoes: 1,
  is_default: boolean
}
export default ShoePage;
