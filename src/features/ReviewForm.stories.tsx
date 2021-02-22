import ReviewForm from './ReviewForm';
import React from 'react';
export default {
  title: 'Features/Review Form',
  component: ReviewForm,
};

export const Primary = () => (
  <ReviewForm
    maxRating={5}
    submitHandler={() => { }}
  />
);
