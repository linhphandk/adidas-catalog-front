import React from 'react';
import Review from '@Features/Review';

export default {
  title: 'Features/Review',
  component: Review,
};

export const Primary = () => (
  <Review
    user_name='Peter'
    rating={4}
    comment='Lorem ipsum'
  />
);
