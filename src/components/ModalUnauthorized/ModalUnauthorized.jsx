import React from 'react';

import { Pawprint } from 'utils/icons';
import Modal from '@mui/material/Modal';

import {
  ModalBox,
  ModalTitle,
  ModalText,
  BtnLogIn,
  BtnRegister,
  BtnsWrapper,
  ModalCloseBtn,
  ModalCloseBtnIcon,
} from './ModalUnauthorized.styled';

const ModalUnauthorized = ({ open, handleClose }) => {
  return (
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <ModalCloseBtn>
            <ModalCloseBtnIcon onClick={handleClose} />
          </ModalCloseBtn>

          <ModalTitle id="modal-modal-title">Attention</ModalTitle>
          <ModalText id="modal-modal-description">
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </ModalText>

          <BtnsWrapper>
            <BtnLogIn to="/login">
              Log IN
              <Pawprint />
            </BtnLogIn>
            <BtnRegister to="/register">Register</BtnRegister>
          </BtnsWrapper>
        </ModalBox>
      </Modal>
  
  );
};

export default ModalUnauthorized;