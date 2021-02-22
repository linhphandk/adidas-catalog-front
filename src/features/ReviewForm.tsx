import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {
  StyledRatingContainer, StyledReviewForm, StyledStarImage,
} from '@Features/ReviewForm.style';
import TextArea from '@Components/TextArea';
import Input from '@Components/Input';
import {IReviewFormProps} from './ReviewForm.interface';
import PropTypes from 'prop-types';
import StarIcon from '@Images/star.base64';
import BlankStarIcon from '@Images/blankStar.base64';
import Button from '@Components/Button';
const ReviewForm: FC<IReviewFormProps> =
  (props) => {
    const [savedRating, setSavedRating] = useState<number>(0);
    const [rating, setRating] = useState<number|null>(0);
    const [userName, setUserName] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [isUserNameError, setUserNameError] = useState<boolean>(false);
    const [isCommentError, setCommentError] = useState<boolean|false>(false);
    const [afterSubmit, setAfterSubmit] = useState<boolean>(false);
    const starsJsx = Array(props.maxRating);
    for (let i = 0; i < starsJsx.length; i++) {
      starsJsx[i] = (
        <StyledStarImage
          key={i}
          src={
            (rating?rating:savedRating) <= i ?
              BlankStarIcon :
              StarIcon
          }
          className={
            (rating ? rating : savedRating) <= i ?
              '' :
              'active'
          }
          onClick={() => {
            ratingHandler(i + 1);
          }}
          onMouseOver={() => {
            ratingMouseOver(i + 1);
          }}
          onMouseOut={() => {
            ratingMouseOut();
          }}
        />
      );
    }

    useEffect(() => {
      if (afterSubmit) {
        return;
      }
      if (userName === '') {
        setUserNameError(true);
      } else {
        setUserNameError(false);
      }
    }, [userName]);

    useEffect(() => {
      if (afterSubmit) {
        return;
      }
      if (comment === '') {
        setCommentError(true);
      } else {
        setCommentError(false);
      }
    }, [comment]);

    useEffect(() => {
      setUserNameError(false);
      setCommentError(false);
    }, []);

    const resetFormHandler = () => {
      setRating(null);
      setUserName('');
      setComment('');
      setSavedRating(0);
    };
    const ratingMouseOver: (rating: number) => void =
      (rating) => {
        setRating(rating);
      };

    const ratingMouseOut: () => void =
      () => {
        setRating(null);
      };

    const ratingHandler: (rating: number) => void =
      (rating) => {
        setSavedRating(rating);
      };

    const userNameChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setAfterSubmit(false);
      setUserName(e.target.value);
    };

    const commentChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setAfterSubmit(false);
      setComment(e.target.value);
    };

    const submitHandler = () => {
      if (userName === '') {
        setUserNameError(true);
      }

      if (comment === '') {
        setCommentError(true);
      }

      if (
        userName === '' ||
        comment === '') {
        return;
      } else {
        setUserNameError(false);
        setCommentError(false);
        setAfterSubmit(true);
        props.submitHandler(userName, savedRating, comment, resetFormHandler);
      }
    };
    return (
      <StyledReviewForm>
        <Input
          type="text"
          placeholder="username"
          onChange={
            userNameChangedHandler
          }
          className={
            isUserNameError ? 'error' : ''
          }
          value={userName}
        />
        <StyledRatingContainer>
          Rating:{starsJsx}
        </StyledRatingContainer>
        <TextArea
          style={{resize: 'none'}}
          placeholder="comment"
          onChange={
            commentChangedHandler
          }
          className={
            isCommentError ? 'error' : ''
          }
          value={comment}
        />
        <Button onClick={
          submitHandler
        }>
          Submit
        </Button>
      </StyledReviewForm>
    );
  };

ReviewForm.propTypes = {
  maxRating: PropTypes.number.isRequired,
  submitHandler: PropTypes.func.isRequired,
};
export default ReviewForm;
