import { useState } from 'react';
import {
  FormPetForOptions,
  OptionInner,
  PetForOption,
} from './FormFirstStep.styled';

const FormFirstStep = ({ addToGeneralSetting }) => {
  const [activeOption, setActiveOption] = useState('');

  const handleClickOption = e => {
    const elemDiv = e.target;
    if (elemDiv.nodeName !== 'DIV') return;
    setActiveOption(elemDiv.textContent);
    addToGeneralSetting(prevState => ({
      ...prevState,
      category: elemDiv.textContent,
    }));
  };

  return (
    <FormPetForOptions onClick={handleClickOption}>
      <PetForOption>
        <OptionInner active={activeOption === 'your pet'}>your pet</OptionInner>
      </PetForOption>

      <PetForOption>
        <OptionInner active={activeOption === 'sell'}>sell</OptionInner>
      </PetForOption>
      <PetForOption>
        <OptionInner active={activeOption === 'lost/found'}>
          lost/found
        </OptionInner>
      </PetForOption>
      <PetForOption>
        <OptionInner active={activeOption === 'in good hands'}>
          in good hands
        </OptionInner>
      </PetForOption>
    </FormPetForOptions>
  );
};

export default FormFirstStep;
