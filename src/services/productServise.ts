import axios from 'axios';
import type { ProductType } from '../types/productType/productType';

const baseURL: string = 'https://dummyjson.com/products';
const limit: number = 20;
interface Response {
  products: ProductType[];
}

export const fetchProducts = async () => {
  const { data } = await axios.get<Response>(baseURL, {
    params: {
      limit,
    },
  });
  return data.products;
};

export const fetchProductsById = async (id: ProductType['id']) => {
  const { data } = await axios.get<ProductType>(`${baseURL}/${id}`);
  return data;
};
