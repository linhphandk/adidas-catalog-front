import {AxiosResponse} from 'axios';

/* eslint-disable camelcase */
export interface IReview {
  review_id: number,
  user_name: string,
  rating: number,
  user_comment: string,
  fk_shoes: number,
};

export interface IGetReviewAction {
  type: string;
  payload: AxiosResponse<IReview[]>
};
