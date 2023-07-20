import ModalCongrats from 'components/ModalCongrats/ModalCongrats';
import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData/UserData';
import React from 'react';

const User = () => {
  return (
    <>
      <UserData />
      <PetsData />
      <ModalCongrats />
    </>
  );
};

export default User;
