// import { Container } from '@mui/material';
// import AuthNav from 'components/AuthNav/AuthNav';
import Logo from 'components/Logo/Logo';
// import Logout from 'components/Logout/Logout';
import Nav from 'components/Nav/Nav';
import UserNav from 'components/UserNav/UserNav';
import React from 'react';
import {
  Div,
  MenuBurger,
  Container,
  User,
  CloseBurger,
  AuthBtn,
  AuthContainer,
} from './Header.styled';
import burger from 'components/Header/menu-hamburger.png';
import close from 'components/Header/cross-small.png';
import { Pawprint } from 'utils/icons';

import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';

const Header = ({ handleClick }) => {
  const { isLoggedIn } = useAuth();
  /* Not Authorised */
  /* <AuthNav /> */

  /* Authorised */
  return (
    <Container>
      <Div>
        <Logo />
        <Nav />
      </Div>
      <User>
        {isLoggedIn ? (
          <UserNav />
        ) : (
          <AuthContainer>
            <AuthBtn type="button" login="true">
              <Link />
              Log In
              <Pawprint />
            </AuthBtn>
            <AuthBtn type="button">
              <Link />
              Registration
            </AuthBtn>
          </AuthContainer>
        )}
        {/* <MenuBurger onClick={handleClick}>
          <Link to="/">
            <img src={burger} alt="Menu Burger" />
          </Link>
        </MenuBurger>
        <CloseBurger onClick={handleClick}>
          <Link to="/">
            <img src={close} alt="Menu Close" />
          </Link>
        </CloseBurger> */}
      </User>
    </Container>
  );
};

export default Header;
