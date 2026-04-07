import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import type { ProductType } from '../../types/productType/productType';
import { fetchProductsById } from '../../services/productServise';
import { ErrorState } from '../../components/ErrorState/ErrorState';
import { LoadingState } from '../../components/LoadingState/LoadingState';
import css from './productItemPage.module.css';

export const ProductItemPage = () => {
  const { id } = useParams();
  const {
    data: product,
    isError,
    isLoading,
  } = useQuery<ProductType>({
    queryKey: ['product'],
    queryFn: () => fetchProductsById(Number(id)),
  });
  return (
    <>
      {isError && <ErrorState />}
      {isLoading && <LoadingState />}
      {!isLoading && product && (
        <div className={css.container}>
          <p>{product.title}</p>
          <img
            className={css.img}
            src={product?.images[0]}
            alt={product.title}
          />
          <p>Description: {product.description}</p>
        </div>
      )}
    </>
  );
};
