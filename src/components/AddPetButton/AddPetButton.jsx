import React from 'react';
import { useWindowSize } from 'hooks/useResize';

import { Btn } from './AddPetButton.styled';
import { PlusIcon, PlusSmallIcon } from 'utils/icons';

const AddPetButton = ({ text }) => {
  const [screenWidth] = useWindowSize();

  return (<Btn>
    {screenWidth < 768 && <PlusIcon />}
      {text}
      {screenWidth >= 768 && <PlusSmallIcon />}
  </Btn>);
};

export default AddPetButton;
