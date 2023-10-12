import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPets } from 'redux/pets/petsOperations';
import { selectIsFirstEnter } from 'redux/auth/authSelectors';
import { congratsOff } from 'redux/auth/authSlice';

import { BsPlus } from 'react-icons/bs';

import Backdrop from 'components/Backdrop/Backdrop';
import ModalCongrats from 'components/ModalCongrats/ModalCongrats';
import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData/UserData';
import {
  Title,
  MainContainer,
  PetsContainer,
  AddPetButton,
} from 'components/UserData/UserData.styled';

const User = () => {
  const [modalOpen, setIsModalOpen] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  const closeModal = () => {
    setIsModalOpen(prevState => !prevState);
    dispatch(congratsOff());
  };

  const isFirstEnter = useSelector(selectIsFirstEnter);

  return (
    <>
      {isFirstEnter && modalOpen && (
        <Backdrop closeModal={closeModal}>
          <ModalCongrats closeModal={closeModal} />
        </Backdrop>
      )}
      <MainContainer>
        <div>
          <Title style={{ marginBottom: '24px' }}>My information:</Title>
          <UserData />
        </div>
        <div style={{ width: '100%' }}>
          <PetsContainer>
            <Title>My pets:</Title>
            <AddPetButton to="/add-pet">
              Add Pet
              <BsPlus />
            </AddPetButton>
          </PetsContainer>
          <PetsData />
        </div>
      </MainContainer>
    </>
  );
};

export default User;
