import React from 'react';
import { Menu, Container } from './Nav.styled';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Menu>
      <Container>
        <Link to="/news">News</Link>
      </Container>

      <Container>
        <Link to="/notices">Find pet</Link>
      </Container>

      <Container>
        <Link to="/friends">Our friends</Link>
      </Container>
    </Menu>
  );
};

export default Nav;
