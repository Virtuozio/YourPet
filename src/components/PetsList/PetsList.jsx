import PetsItem from 'components/PetsItem/PetsItem';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectPets } from 'redux/pets/petsSelectors';

const PetsList = () => {
  const pets = useSelector(selectPets);
  console.log(pets);
  return (
    <div>
      <PetsItem />
    </div>
  );
};

export default PetsList;
