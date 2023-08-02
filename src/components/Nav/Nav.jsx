import React from 'react';
import { StyledLink } from './Nav.styled';

const Nav = () => {
  return (
    <>
      <StyledLink to="/news">News</StyledLink>

      <StyledLink to="/notices/sell">Find pet</StyledLink>

      <StyledLink to="/friends">Our friends</StyledLink>
    </>
  );
};

export default Nav;
