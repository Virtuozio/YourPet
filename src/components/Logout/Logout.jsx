import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { LogoutBtn } from './Logout.styled';

const Logout = () => {
  return (
    <div style={{ marginTop: '25px' }}>
      <LogoutBtn type="button">
        <CiLogout />
        Log Out
      </LogoutBtn>
    </div>
  );
};

export default Logout;
