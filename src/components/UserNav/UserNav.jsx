import React from 'react';
import { Link } from 'react-router-dom';
import { User, Container } from './UserNav.styled';
import icon from '../UserNav/user.png';

const UserNav = () => {
  return (
    <Container>
      <Link>
        <img src={icon} alt="" />
      </Link>
      <User>Anna</User>
    </Container>
  );
};

export default UserNav;
