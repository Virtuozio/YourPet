import React from 'react';

import {
  Section,
  Header,
  BtnCancel,
  BtnYes,
  LogoutIcon,
  BtnsWrapper,
} from './ModalApproveAction.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const ModalApproveAction = ({ closeModal }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Section>
      <Header>Already leaving?</Header>
      <BtnsWrapper>
        <BtnCancel type="button" onClick={closeModal}>
          Cancel
        </BtnCancel>
        <BtnYes to="/notices" onClick={handleLogout}>
          Yes
          <LogoutIcon />
        </BtnYes>
      </BtnsWrapper>
    </Section>
  );
};

export default ModalApproveAction;
