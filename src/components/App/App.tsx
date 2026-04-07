import { Route, Routes } from 'react-router';
import { Layout } from '../Layout/Layout';
import { MainPage } from '../../pages/MainPage/MainPage';
import { ProductPage } from '../../pages/ProductsPage/ProductsPage';
import { ProductItemPage } from '../../pages/ProductItemPage/ProductItemPage';
import { ProductItemSubPage } from '../../pages/ProductItemSubPage/ProductItemSubPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/:id/description" element={<ProductItemPage />}>
          <Route path="review" element={<ProductItemSubPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
