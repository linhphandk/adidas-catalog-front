export interface IReviewFormProps {
  maxRating: number,
  submitHandler: (
    userName: string,
    rating: number,
    comment: string,
    resetForm: () => void
  ) => void,
};
