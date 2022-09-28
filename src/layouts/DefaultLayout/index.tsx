import { Outlet } from 'react-router-dom';

import { Header } from '@/components';

import { LayoutContainer } from './styles';

export function DefaultLayout(): JSX.Element {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
