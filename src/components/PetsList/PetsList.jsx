import PetsItem from 'components/PetsItem/PetsItem';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectPets } from 'redux/pets/petsSelectors';

const PetsList = () => {
  const pets = useSelector(selectPets);
  return (
    <div>
      {pets.length !== 0 &&
        pets.map(item => <PetsItem key={item._id} pet={item} />)}
    </div>
  );
};

export default PetsList;
