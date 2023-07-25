import ModalCongrats from 'components/ModalCongrats/ModalCongrats';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData/UserData';
import React from 'react';
import { Title, MainContainer } from 'components/UserData/UserData.styled';

const User = () => {
  return (
    <>
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
      <ModalCongrats />
    </>
  );
};

export default User;
