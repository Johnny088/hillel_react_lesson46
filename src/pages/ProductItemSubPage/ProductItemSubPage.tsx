import { useQuery } from '@tanstack/react-query';
import { fetchReviewsById } from '../../services/productServise';
import { useParams } from 'react-router';

import type { ReviewType } from '../../types/reviewType/reviewType';
import { ReviewsEmptyState } from '../../components/ReviewsEmptyState/ReviewsEmptyState';

export const ProductItemSubPage = () => {
  const { id } = useParams();

  const { data: reviews } = useQuery<ReviewType[]>({
    queryKey: ['reviews'],
    queryFn: () => fetchReviewsById(Number(id)),
  });
  return (
    <ul>
      {!reviews && <ReviewsEmptyState />}
      {reviews &&
        reviews.length > 0 &&
        reviews.map((review, index) => (
          <li key={index}>
            <p>Username - {review.reviewerName}</p>
            <p>{review.reviewerEmail}</p>
            <p>Rating - {review.rating}</p>
            <p>{review.comment}</p>
            <p>{new Date(review.date).toLocaleString()}</p>
            <p>------------------------</p>
          </li>
        ))}
    </ul>
  );
};
