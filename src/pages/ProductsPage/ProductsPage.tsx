import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../services/productServise';
import type { ProductType } from '../../types/productType/productType';
import { LoadingState } from '../../components/LoadingState/LoadingState';
import { ErrorState } from '../../components/ErrorState/ErrorState';
import { Link } from 'react-router';

export const ProductPage = () => {
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery<ProductType[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  const selectChangeHandler = (selectedValue): void => {
    console.log(selectedValue);
  };
  return (
    <>
      {isError && <ErrorState />}
      {isLoading && <LoadingState />}
      {!isLoading && products && products.length > 0 && (
        <>
          <form>
            <select id="dropdownMenu" onChange={selectChangeHandler}>
              <option value="asc">asc</option>
              <option value="desk">desk</option>
            </select>
          </form>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <Link to={`${product.id}`}>
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
