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
import { useDispatch } from 'react-redux';
import { deletePet } from 'redux/pets/petsOperations';

const PetsItem = ({ pet }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const approveAction = () => {
    dispatch(deletePet(pet._id));
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <PetCard>
        <PetImage src={pet.fileURL} alt={pet.name} />
        <InfoContainer>
          <DeleteBtn type="button" onClick={closeModal}>
            <BiTrash />
          </DeleteBtn>
          <div>
            <PetInfo>
              <b>Name:</b> {pet.name}
            </PetInfo>
            <PetInfo>
              <b>Date of birth:</b> {pet.date}
            </PetInfo>
            <PetInfo>
              <b>Type:</b> {pet.type}
            </PetInfo>
            <PetInfo>
              <b>Comments:</b> {pet.comments}
            </PetInfo>
          </div>
        </InfoContainer>
      </PetCard>

      {isModalOpen && (
        <Backdrop closeModal={closeModal}>
          <ModalDeleteAction
            deleteModal={isModalOpen}
            deleteModalClose={closeModal}
            handleRemoveOwnNotice={approveAction}
            notice={pet}
          />
        </Backdrop>
      )}
    </>
  );
};
export default PetsItem;
