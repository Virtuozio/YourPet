import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { LogoutBtn } from './Logout.styled';
// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/authOperations';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import Backdrop from 'components/Backdrop/Backdrop';
import { useState } from 'react';

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); //поміняти значення на false*true//

  const closeModal = () => {
    setIsModalOpen(prevState => !prevState);
  };
  // const dispatch = useDispatch();

  return (
    <div style={{ marginTop: '25px' }}>
      <LogoutBtn type="button" onClick={closeModal}>
        <CiLogout />
        Log Out
      </LogoutBtn>
      {isModalOpen && (
        <Backdrop closeModal={closeModal}>
          <ModalApproveAction closeModal={closeModal} />
        </Backdrop>
      )}
    </div>
  );
};

export default Logout;
