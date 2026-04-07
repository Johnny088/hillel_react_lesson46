import { Outlet, useLocation } from 'react-router';
import { NavBar } from '../NavBar/NavBar';

export const Layout = () => {
  const location = useLocation();
  return (
    <>
      <header>
        {!location.pathname.includes('description') && <NavBar />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
