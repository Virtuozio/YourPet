import React from 'react';
import logo from '../Logo/logo.png';
import logoSmall from './logoSmall.png';
import { Link } from 'react-router-dom';

const Logo = ({ size }) => {
  return (
    <Link to="/">
      {size[0] < 768 && <img src={logoSmall} alt="Logo" />}

      {size[0] >= 768 && <img src={logo} alt="Logo" />}
    </Link>
  );
};

export default Logo;
