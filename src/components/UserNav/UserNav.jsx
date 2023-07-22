import React from 'react';
import Link from './UserNav.styled';
import icon from '../UserNav/user.png';

const UserNav = () => {
  return (
    <Link>
      <img src={icon} alt="" /> Anna
    </Link>
  );
};

export default UserNav;
