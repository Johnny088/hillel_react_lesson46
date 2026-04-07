import { NavLink } from 'react-router';
import css from './Navbar.module.css';
export const NavBar = () => {
  return (
    <nav>
      <ul className={css.nav}>
        <NavLink
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          to="/products"
        >
          <li>Products</li>
        </NavLink>
      </ul>
    </nav>
  );
};
