import Logout from 'components/Logout/Logout';
import UserForm from 'components/UserForm/UserForm';
import React from 'react';
import { BiEditAlt } from 'react-icons/bi';
import useModal from 'hooks/useModal';
import { Backdrop } from 'components/Backdrop/Backdrop';

const UserData = () => {
  const { toggleModal, showModal } = useModal(false);
  return (
    <>
      <div>UserData</div>
      <BiEditAlt onClick={() => toggleModal()} />
      {showModal && (
        <Backdrop closeModal={toggleModal}>
          <UserForm closeModal={toggleModal} />
        </Backdrop>
      )}

      <Logout />
    </>
  );
};

export default UserData;
