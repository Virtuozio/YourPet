import React from 'react';
import Menu from '../Nav/Nav.styled';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Menu>
      <Link to="/news">News</Link>
      <Link to="/notices">Find pet</Link>
      <Link to="/friends">Our friends</Link>
    </Menu>
  );
};

export default Nav;
