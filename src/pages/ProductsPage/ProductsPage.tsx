import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../services/productServise';
import type { ProductType } from '../../types/productType/productType';
import { LoadingState } from '../../components/LoadingState/LoadingState';
import { ErrorState } from '../../components/ErrorState/ErrorState';
import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { SearOrderForm } from '../../components/SearchOrderForm/SearchOrderForm';

export const ProductPage = () => {
  const location = useLocation();

  const [order, setOrder] = useState('asc');
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery<ProductType[]>({
    queryKey: ['products', order],
    queryFn: () => fetchProducts(order),
  });
  const orderStatus = (value: string): void => {
    setOrder(value);
  };
  return (
    <>
      {isError && <ErrorState />}
      {isLoading && <LoadingState />}
      {!isLoading && products && products.length > 0 && (
        <>
          <SearOrderForm orderStatus={orderStatus} />

          <ul>
            {products.map(product => (
              <li key={product.id}>
                <Link
                  to={`${product.id}/description`}
                  state={{ from: location }}
                >
                  <p>{product.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
