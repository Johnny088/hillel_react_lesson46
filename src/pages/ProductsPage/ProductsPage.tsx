import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../services/productServise';
import type { ProductType } from '../../types/productType/productType';
import { LoadingState } from '../../components/LoadingState/LoadingState';
import { ErrorState } from '../../components/ErrorState/ErrorState';
import { Link, useLocation, useSearchParams } from 'react-router';

import { SearOrderForm } from '../../components/SearchOrderForm/SearchOrderForm';
import type { OrderStatusType } from '../../types/orderStatusType/orderStatusType';
import { useEffect } from 'react';

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get('order') === null) {
      setSearchParams({ order: 'asc' });
    }
  }, []);

  const order = searchParams.get('order') as OrderStatusType;
  const location = useLocation();

  const {
    data: products,
    isError,
    isLoading,
  } = useQuery<ProductType[]>({
    queryKey: ['products', order],
    queryFn: () => fetchProducts(order),
  });

  const orderStatus = (value: OrderStatusType): void => {
    setSearchParams({ order: value });
  };
  return (
    <>
      {isError && <ErrorState />}
      {isLoading && <LoadingState />}
      {!isLoading && products && products.length > 0 && (
        <>
          <SearOrderForm orderStatus={orderStatus} value={order} />

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
