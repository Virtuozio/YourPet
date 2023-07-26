import Backdrop from 'components/Backdrop/Backdrop';
import ModalCongrats from 'components/ModalCongrats/ModalCongrats';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData/UserData';
import { Title, MainContainer } from 'components/UserData/UserData.styled';
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
      <MainContainer>
        <div>
          <Title>My information:</Title>
          <UserData />
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Title>My pets:</Title>
            <AddPetButton text={'Add pet'} path={'/add-pet'} />
          </div>
          <PetsData />
        </div>
      </MainContainer>
    </>
  );
};

export default User;
