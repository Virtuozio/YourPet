import Backdrop from 'components/Backdrop/Backdrop';
import ModalCongrats from 'components/ModalCongrats/ModalCongrats';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData/UserData';
import { Title, MainContainer } from 'components/UserData/UserData.styled';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPets } from 'redux/pets/petsOperations';
import { selectIsRegistered } from 'redux/auth/authSelectors';

const User = () => {
  const [modalOpen, setIsModalOpen] = useState(true); //поміняти значення на false*true//
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);
  const closeModal = () => {
    setIsModalOpen(prevState => !prevState);
  };
  const isRegistered = useSelector(selectIsRegistered);

  return (
    <>
      {isRegistered && modalOpen && (
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
              width: '818px',
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
