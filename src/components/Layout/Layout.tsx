import { Outlet } from 'react-router';
import { NavBar } from '../NavBar/NavBar';

export const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
