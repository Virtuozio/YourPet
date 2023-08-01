// import { Container } from '@mui/material';
// import AuthNav from 'components/AuthNav/AuthNav';
import Logo from 'components/Logo/Logo';
// import Logout from 'components/Logout/Logout';
import Nav from 'components/Nav/Nav';
import UserNav from 'components/UserNav/UserNav';
import React, { useState } from 'react';
import { Container, User } from './Header.styled';
import icon from '../UserNav/user.png';

import { useAuth, useWindowSize } from 'hooks';
import { Link } from 'react-router-dom';
import AuthNav from 'components/AuthNav/AuthNav';
import { Menu } from 'components/Menu/Menu';

const Header = ({ handleClick }) => {
  const { isLoggedIn, user } = useAuth();
  const size = useWindowSize();
  const [openMenu, setOpenMenu] = useState(false);
  /* Not Authorised */
  /* <AuthNav /> */

  /* Authorised */
  return (
    <Container>
      <Logo size={size} />
      {size[0] >= 768 && size[0] < 1200 && isLoggedIn && (
        <div
          style={{ display: 'flex', alignItems: 'center', marginLeft: '399px' }}
        >
          <Link to="/user">
            <img src={icon} alt="icon" />
          </Link>
          {user && <User>{user.name}</User>}
        </div>
      )}
      {size[0] >= 768 && size[0] < 1200 && !isLoggedIn && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <AuthNav />
        </div>
      )}
      {size[0] < 1200 && (
        <Menu size={size} openMenu={openMenu} setOpenMenu={setOpenMenu} />
      )}
      {size[0] >= 1200 && (
        <>
          <div style={{ display: 'flex', gap: '40px' }}>
            <Nav />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {isLoggedIn ? <UserNav /> : <AuthNav />}
          </div>
        </>
      )}
    </Container>
  );
};

export default Header;
