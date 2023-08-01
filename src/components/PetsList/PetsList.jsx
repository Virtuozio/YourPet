import PetsItem from 'components/PetsItem/PetsItem';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectPets } from 'redux/pets/petsSelectors';

import { PetsListStyled } from './PetsList.styled';

const PetsList = () => {
  const pets = useSelector(selectPets);

  return (
    <PetsListStyled>
      {pets.length !== 0 &&
        pets.map(item => <PetsItem key={item._id} pet={item} />)}
    </PetsListStyled>
  );
};

export default PetsList;
