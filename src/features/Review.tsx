import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {IReviewProps} from './Review.interface';
import StarIcon from '@Images/star.base64';
import {
  StyledReviewHeading, StyledHeading4, StyledReviewContainer,
} from './Review.style';
import {StyledStarImage} from './ReviewForm.style';
const Review: FC<IReviewProps> = (props) => {
  const starJsx = [];
  for (let i = 0; i < props.rating; i++) {
    starJsx.push(
        <StyledStarImage key={i} src={StarIcon} />,
    );
  }
  return (
    <StyledReviewContainer>
      <StyledReviewHeading>
        <StyledHeading4>{props.user_name}</StyledHeading4>
        <div>{starJsx}</div>
      </StyledReviewHeading>
      <p>{props.comment}</p>
    </StyledReviewContainer>
  );
};
Review.propTypes = {
  user_name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};
export default Review;
