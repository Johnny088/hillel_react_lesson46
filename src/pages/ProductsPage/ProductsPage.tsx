import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../services/productServise';
import type { ProductType } from '../../types/productType/productType';
import { LoadingState } from '../../components/LoadingState/LoadingState';
import { ErrorState } from '../../components/ErrorState/ErrorState';
import { Link, useLocation, useSearchParams } from 'react-router';
import { useState } from 'react';
import { SearOrderForm } from '../../components/SearchOrderForm/SearchOrderForm';
type Order = 'asc' | 'desc';

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchOrder = (searchParams.get('order') as Order) ?? 'asc';
  const location = useLocation();
  console.log(location);
  const [order, setOrder] = useState<Order>(searchOrder);
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery<ProductType[]>({
    queryKey: ['products', order],
    queryFn: () => fetchProducts(order),
  });
  const orderStatus = (value: Order): void => {
    setOrder(value);
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
