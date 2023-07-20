import AuthNav from 'components/AuthNav/AuthNav';
import Logo from 'components/Logo/Logo';
import Logout from 'components/Logout/Logout';
import Nav from 'components/Nav/Nav';
import UserNav from 'components/UserNav/UserNav';
import React from 'react';
const Header = () => {
  return (
    <>
      <Logo />
      <Nav />

      {/* Not Authorised */}
      <AuthNav />

      {/* Authorised */}
      <UserNav />
      <Logout />
    </>
  );
};

export default Header;
