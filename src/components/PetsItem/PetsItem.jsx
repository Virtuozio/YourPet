import React from 'react';
import { BiTrash } from 'react-icons/bi';
import {
  PetCard,
  PetImage,
  PetInfo,
  DeleteBtn,
  InfoContainer,
} from './PetsItem.styled';

const PetsItem = ({ name, birthday, type, comment }) => {
  return (
    <PetCard>
      <PetImage />
      <InfoContainer>
        <DeleteBtn>
          <BiTrash />
        </DeleteBtn>
        <PetInfo>
          <b>Name:</b>
          {name}
        </PetInfo>
        <PetInfo>
          <b>Date of birth:</b> {birthday}
        </PetInfo>
        <PetInfo>
          <b>Type:</b> {type}
        </PetInfo>
        <PetInfo>
          <b>Comments:</b> {comment}
        </PetInfo>
      </InfoContainer>
    </PetCard>
  );
};
export default PetsItem;
