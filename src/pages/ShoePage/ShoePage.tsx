/* eslint-disable camelcase */
import axios, {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {IShoes} from 'src/ducks/ShoesList/IShoesList';
import styled from 'styled-components';
import Slider from '../../components/Slider/Slider';
import {SHOES_API} from '../../shared';

const ShoePage: React.FC = (props)=>{
  const {id} = useParams<IUrlParams>();
  const [shoes, setShoes] = useState<IShoes|undefined>();
  useEffect(()=>{
    axios.get(SHOES_API+'shoes/detail/'+id).then(
        (result: AxiosResponse<IShoes>)=>{
          setShoes(result.data);
        });
  }, []);
  return (
    <StyledShoePage>
      <StyledSliderWrapper>
        <Slider
          defaultIndex={
            0
          }
          images={shoes?.images ? shoes.images : []} />
      </StyledSliderWrapper>

      <StyledInfoContainer>
        <StyledProductName>
          {shoes?.shoesDetail.product_name}
        </StyledProductName>
        <StyledBrandName>
          Brand: {shoes?.shoesDetail.brand}
        </StyledBrandName>
        <StyledListingPrice>{
          shoes?.shoesDetail.listing_price ?
            shoes.shoesDetail.listing_price / 100 :
            'N/A'
        }</StyledListingPrice>
        <StyledSalePrice>
          {shoes?.shoesDetail.sale_price ?
            shoes.shoesDetail.sale_price / 100 :
            'N/A'}
        </StyledSalePrice>
        <StyledDescription>
            Description: {shoes?.shoesDetail.description}
        </StyledDescription>
        <StyledLinkButton href={shoes?.shoesDetail.url}>
          Visit
        </StyledLinkButton>
      </StyledInfoContainer>
    </StyledShoePage>
  );
};
interface IUrlParams{
  id: string
}
const StyledInfoContainer = styled.div`
flex-basis:45%
`;
const StyledDescription = styled.div`
  margin-bottom: 10px;
`;
const StyledLinkButton = styled.a`
background: purple;
    text-decoration: none;
    color: white;
    padding: 10px 25px;
    border-radius: 5px;
    display: inline-block;
`;
const StyledSliderWrapper = styled.div`
flex-basis:45%;
display: flex;
align-items: center;
`;
const StyledShoePage = styled.div`
display:flex;
justify-content: space-between;
flex-direction: column;
@media only screen and (min-width: 768px){
  flex-direction: row;
}
`;
const StyledListingPrice = styled.p`
text-decoration: line-through;
color: red
`;
const StyledSalePrice = styled.h3`
  margin-bottom: 15px
`;
const StyledProductName = styled.h1`
margin-bottom: 25px
`;
const StyledBrandName = styled.h2`
margin-bottom: 15px`;
export default ShoePage;
