import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from '@/layouts';

import { ComponentWrapper } from './ComponentWrapper';

const Home = lazy(() => import('../pages/Home'));
const Cart = lazy(() => import('../pages/Cart'));
const Invoice = lazy(() => import('../pages/Invoice'));

export function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<ComponentWrapper Component={Home} />} />
        <Route path="/cart" element={<ComponentWrapper Component={Cart} />} />
        <Route
          path="/invoice"
          element={<ComponentWrapper Component={Invoice} />}
        />
      </Route>
    </Routes>
  );
}
