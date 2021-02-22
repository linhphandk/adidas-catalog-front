/* eslint-disable camelcase */
import axios, {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {IShoes} from 'src/ducks/shoesList.interface';
import styled from 'styled-components';
import Slider from '@Features/Slider';
import ReviewForm from '@Features/ReviewForm';
import {SHOES_API} from '../../shared';
import {IReview} from 'src/ducks/reviews.interface';
import Review from '@Features/Review';
import loadingBase64 from '@Images/loading.base64';
import {BaseButtonCss} from '@Components/Button.style';
import BackButton from '@Components/BackButton';

const ShoePage: React.FC = ()=>{
  const {id} = useParams<IUrlParams>();
  const [shoes, setShoes] = useState<IShoes | undefined>();
  const [reviews, setReviews] = useState<IReview[] | null>(null);
  useEffect(() => {
    axios.get(SHOES_API+'shoes/detail/'+id).then(
        (result: AxiosResponse<IShoes>)=>{
          setShoes(result.data);
          axios.get(SHOES_API + 'reviews/' + id).then(
              (result: AxiosResponse<IReview[]>) => {
                setReviews(result.data);
              });
        });
  }, []);

  const getReviewsJsx:
    () => JSX.Element | JSX.Element[] =
    () => {
      if (reviews?.length === 0) {
        return <p>No comments yet</p>;
      } else {
        const reviewsJsx = reviews?.map((review) => (
          <Review
            key={review.review_id}
            user_name={review.user_name}
            comment={review.user_comment}
            rating={review.rating}
          />
        ));
        return reviewsJsx?reviewsJsx:[];
      }
    };
  const submitHandler = (
      userName: string,
      rating: number,
      comment: string,
      clearFormHandler: () => void,
  ) => {
    axios.post(
        SHOES_API + 'reviews',
        {
          'user_name': userName,
          'rating': rating,
          'user_comment': comment,
          'fk_shoes': id,
        },
    ).then((response: AxiosResponse<IReview>) => {
      if (reviews) {
        setReviews([response.data, ...reviews]);
        clearFormHandler();
      };
    });
  };
  return (
    <StyledShoePage>
      <StyledBackButtonWrapper>
        <BackButton
          backUrl="/"
          backText="Back to Listing"
        />
      </StyledBackButtonWrapper>
      <StyledMainContainer>
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
      </StyledMainContainer>
      <StyledCommentContainer>
        <StyledReviewHeader>
          User Reviews
        </StyledReviewHeader>
        <StyledReviewFormWrapper>
          <ReviewForm
            maxRating={5}
            submitHandler={submitHandler}
          />
        </StyledReviewFormWrapper>
        {
        reviews === null ?
          <img src={loadingBase64}/>:getReviewsJsx()
        }
      </StyledCommentContainer>
    </StyledShoePage>
  );
};
interface IUrlParams{
  id: string
}
const StyledBackButtonWrapper = styled.div`
  text-align:center;
  margin-bottom:10px;
  @media only screen and (min-width: 768px){
    margin-bottom:20px;
  }
}
`;
const StyledReviewFormWrapper = styled.div`
  margin-bottom: 15px;
`;
const StyledInfoContainer = styled.div`
flex-basis:45%
`;
const StyledReviewHeader = styled.h1`
  margin-bottom: 40px;
 @media only screen and (min-width: 768px){
    margin-bottom: 30px;
  }
`;
const StyledDescription = styled.div`
  margin-bottom: 10px;
`;
const StyledLinkButton = styled.a`
 ${BaseButtonCss}
`;
const StyledSliderWrapper = styled.div`
flex-basis:45%;
display: flex;
align-items: center;
`;
const StyledShoePage = styled.div`
`;
const StyledMainContainer = styled.div`
display:flex;
justify-content: space-between;
flex-direction: column;
margin-bottom: 40px;
@media only screen and (min-width: 768px){
  flex-direction: row;
}
`;
const StyledCommentContainer = styled.div`
  max-width: 405px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
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
