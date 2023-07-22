import React from 'react';
import logo from '../Logo/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/home">
      <img src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;