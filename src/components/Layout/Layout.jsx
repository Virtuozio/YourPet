import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Link, NavBurger } from './Layout.styled';
import { useState } from 'react';

import { LayoutContainer } from './Layout.styled';
const Layout = () => {
  const [menuActive, setMenuActive] = useState(false);
  const handleClick = () => {
    document.querySelector('body').classList.toggle('scroll-none');
    setMenuActive(!menuActive);
  };

  return (
    <LayoutContainer>
      <Header handleClick={handleClick}></Header>
      {/* {menuActive && (
        <NavBurger>
          <Link href="/news">News</Link>
          <Link href="/notices">Find pet</Link>
          <Link href="/friends">Our friends</Link>
        </NavBurger>
      )} */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};

export default Layout;
