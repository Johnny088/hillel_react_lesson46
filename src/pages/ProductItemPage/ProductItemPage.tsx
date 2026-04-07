import { useQuery } from '@tanstack/react-query';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router';
import type { ProductType } from '../../types/productType/productType';
import { fetchProductsById } from '../../services/productServise';
import { ErrorState } from '../../components/ErrorState/ErrorState';
import { LoadingState } from '../../components/LoadingState/LoadingState';
import css from './productItemPage.module.css';
import back from '../../assets/back.png';
export const ProductItemPage = () => {
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const { id } = useParams();
  const {
    data: product,
    isError,
    isLoading,
  } = useQuery<ProductType>({
    queryKey: ['product'],
    queryFn: () => fetchProductsById(Number(id)),
  });
  const goBackHandler = () => {
    navigate(location.state.from ?? '/');
  };
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
          <button onClick={goBackHandler}>
            <p className={css.linkOption}>Go back</p>
            <img width={40} height={40} src={back} alt="back arroy" />
          </button>
          <Link to="review" state={location.state}>
            <p>Read reviews</p>
          </Link>
          <Outlet />
        </div>
      )}
    </>
  );
};
