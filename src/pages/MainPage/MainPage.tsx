import css from './MainPage.module.css';
import { useNavigate } from 'react-router';

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className={css.container}>
      <h1>Welcome to the website</h1>
      <button onClick={() => navigate('/products')}>show products</button>
    </div>
  );
};
