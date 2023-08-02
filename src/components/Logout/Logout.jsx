import  {React, useState }  from 'react';

import { CiLogout } from 'react-icons/ci';
import { LogoutBtn } from './Logout.styled';

import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import Backdrop from 'components/Backdrop/Backdrop';

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const closeModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

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
