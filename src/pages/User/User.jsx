import Backdrop from 'components/Backdrop/Backdrop';
import ModalCongrats from 'components/ModalCongrats/ModalCongrats';
import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData/UserData';
import React, { useState } from 'react';

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); //поміняти значення на false*true//

  const closeModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      {isModalOpen && (
        <Backdrop closeModal={closeModal}>
          <ModalCongrats closeModal={closeModal} />
        </Backdrop>
      )}
      <UserData />
      <PetsData />
    </>
  );
};

export default User;
