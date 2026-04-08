import { Link } from 'react-router';
import css from './NotFoundPage.module.css';
export const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h1>Page is not found </h1>
      <Link to="/">
        <p>Go to home page</p>
      </Link>
    </div>
  );
};
