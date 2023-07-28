import React from 'react';
import { BiTrash } from 'react-icons/bi';
import {
  PetCard,
  PetImage,
  PetInfo,
  DeleteBtn,
  InfoContainer,
} from './PetsItem.styled';

import ModalDeleteAction from 'components/ModalDeleteAction/ModalDeleteAction';
import Backdrop from 'components/Backdrop/Backdrop';
import { useState } from 'react';

const PetsItem = () => {

  const [isModalOpen, setIsModalOpen] = useState(false); 

  const closeModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
    <PetCard>
      <PetImage />
      <InfoContainer>
        <DeleteBtn type="button" onClick={closeModal}>
          <BiTrash />
        </DeleteBtn>
        <PetInfo>
          <b>Name:</b> Jack
        </PetInfo>
        <PetInfo>
          <b>Date of birth:</b> 22.04.2018
        </PetInfo>
        <PetInfo>
          <b>Type:</b> Persian cat
        </PetInfo>
        <PetInfo>
          <b>Comments:</b> Jack is a gray Persian cat with green eyes. He loves
          to be pampered and groomed, and enjoys playing with toys. Although a
          bitshy, he's a loyal and affectionate lap cat.
        </PetInfo>
      </InfoContainer>
      </PetCard>

      {isModalOpen && (
        <Backdrop closeModal={closeModal}>
          <ModalDeleteAction closeModal={closeModal} />
        </Backdrop>
      )}
      </>
  );
};
export default PetsItem;
