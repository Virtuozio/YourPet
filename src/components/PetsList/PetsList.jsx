import PetsItem from 'components/PetsItem/PetsItem';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectPets } from 'redux/pets/petsSelectors';

const PetsList = () => {
  const pets = useSelector(selectPets);

  return (
    <ul>
      {pets.map(pet => {
        return (
          <li key={pet.id}>
            <PetsItem pet={pet} />
          </li>
        );
      })}
    </ul>
  );
};

export default PetsList;
