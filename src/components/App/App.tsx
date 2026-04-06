import { Route, Routes } from 'react-router';
import { Layout } from '../Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<}/> */}
      </Route>
    </Routes>
  );
};
