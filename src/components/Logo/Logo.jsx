import React from 'react';
import logo from 'assets/images/logo/logo.png';
import logoSmall from 'assets/images/logo/logo-small.png';
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
