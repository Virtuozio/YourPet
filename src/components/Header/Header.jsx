// import { Container } from '@mui/material';
// import AuthNav from 'components/AuthNav/AuthNav';
import Logo from 'components/Logo/Logo';
// import Logout from 'components/Logout/Logout';
import Nav from 'components/Nav/Nav';
import UserNav from 'components/UserNav/UserNav';
import React from 'react';
import { Div } from './Header.styled';
const Header = () => {
  return (
    <Div>
      <Logo />
      <Nav />

      {/* Not Authorised */}
      {/* <AuthNav /> */}

      {/* Authorised */}
      <UserNav />
      {/* <Logout /> */}
    </Div>
  );
};

export default Header;
