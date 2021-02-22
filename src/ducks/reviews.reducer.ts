import {Reducer} from 'react';

import {IGetReviewAction, IReview} from './reviews.interface';
const ReviewReducer: Reducer<
  IReview[],
  IGetReviewAction
> =
  (state = [], action) => {
    switch (action.type) {
      case REVIEW_ACTIONS.GET_REVIEWS:
        if (action.payload.status === 200) {
          return action.payload.data;
        } else {
          return [];
        }
      default:
        return state;
    }
  };


enum REVIEW_ACTIONS {
  GET_REVIEWS = 'get_reviews',
}

export default ReviewReducer;

