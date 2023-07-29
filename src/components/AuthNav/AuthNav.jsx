import React from 'react';
import { AuthBtn } from './AuthNav.styled';
import { Pawprint } from 'utils/icons';

const AuthNav = () => {
  return (
    <>
      {/* <AuthContainer> */}
      <AuthBtn to="/login" login="true">
        Log IN
        <Pawprint />
      </AuthBtn>
      <AuthBtn to="/register">Registration</AuthBtn>
      {/* </AuthContainer> */}
    </>
  );
};

export default AuthNav;
