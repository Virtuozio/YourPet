import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutContainer } from './Layout.styled';
const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};

export default Layout;
