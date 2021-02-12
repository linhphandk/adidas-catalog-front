/* eslint-disable camelcase */
import axios, {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {SHOES_API} from '../../shared';

const ShoePage: React.FC = (props)=>{
  const {id} = useParams<IUrlParams>();
  const [shoes, setShoes] = useState<IShoesDetail|null>(null);
  useEffect(()=>{
    axios.get(SHOES_API+'shoes/detail/'+id).then(
        (result: AxiosResponse<IShoesDetail>)=>{
          setShoes(result.data);
        });
  }, []);
  return (
    <div>
      {shoes? <div>{shoes.shoesDetail.shoes_id}</div>:'loading'}
    </div>);
};
interface IUrlParams{
  id: string
}

interface IShoesDetail{
  shoesDetail: {
    shoes_id: number
  }
}
export default ShoePage;
