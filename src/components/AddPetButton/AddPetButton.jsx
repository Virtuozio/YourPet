import React from 'react';
import { useWindowSize } from 'hooks/useResize';

import { Btn } from './AddPetButton.styled';
import { PlusIcon, PlusSmallIcon } from 'utils/icons';

const AddPetButton = ({ text, path }) => {
  // const location = useLocation();
  const [screenWidth] = useWindowSize();

  
  return (<Btn
    to={path}
    >
    {screenWidth < 768 && <PlusIcon />}
      {text}
      {screenWidth >= 768 && <PlusSmallIcon />}
  </Btn>);
};

export default AddPetButton;
