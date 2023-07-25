import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { LogoutBtn } from './Logout.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: '25px' }}>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        <CiLogout />
        Log Out
      </LogoutBtn>
    </div>
  );
};

export default Logout;
