import React from 'react';
import { useWindowSize } from 'hooks/useResize';

import { Btn, PlusIconSmall, PlusIcon } from './AddPetButton.styled';

const AddPetButton = ({ text, path, onClick }) => {
  const [screenWidth] = useWindowSize();

  return (
    <Btn to={path} onClick={onClick}>
      {screenWidth < 768 && <PlusIcon />}
      {text}
      {screenWidth >= 768 && <PlusIconSmall />}
    </Btn>
  );
};

export default AddPetButton;
