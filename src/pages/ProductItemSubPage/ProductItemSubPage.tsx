import { useQuery } from '@tanstack/react-query';
import { fetchReviewsById } from '../../services/productServise';
import { useParams } from 'react-router';

import type { ReviewType } from '../../types/reviewType/reviewType';

export const ProductItemSubPage = () => {
  const { id } = useParams();

  const {
    data: reviews,
    isError,
    isLoading,
  } = useQuery<ReviewType[]>({
    queryKey: ['reviews'],
    queryFn: () => fetchReviewsById(Number(id)),
  });
  return (
    <ul>
      {reviews?.map(review => (
        <li key={review.reviewerEmail}>
          <p>{review.rating}</p>
          <p>{review.comment}</p>
          {/* <p>{review.date}</p> */}
          <p>{review.reviewerName}</p>
          <p>{review.reviewerEmail}</p>
        </li>
      ))}
    </ul>
  );
};
