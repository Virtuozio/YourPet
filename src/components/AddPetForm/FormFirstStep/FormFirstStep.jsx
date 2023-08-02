import {
  FormPetForOptions,
  InputOption,
  OptionInner,
  PetForOption,
} from './FormFirstStep.styled';

import {
  YOUR_PET,
  SELL,
  LOST_FOUND,
  IN_GOOD_HANDS,
} from 'utils/constants/typesAddPet';

const FormFirstStep = ({
  category,
  handleChange,
  resetForm,
  initialValues,
  setFieldValue,
}) => {
  const handleInputChange = e => {
    const { value } = e.target;
    resetForm({ values: { ...initialValues } });
    setFieldValue('category', value);
  };

  return (
    <FormPetForOptions>
      <PetForOption>
        <InputOption
          type="radio"
          name="category"
          id="your-pet"
          value="your-pet"
          checked={category === YOUR_PET}
          onChange={handleInputChange}
        />
        <OptionInner htmlFor="your-pet" active={category === YOUR_PET}>
          your pet
        </OptionInner>
      </PetForOption>

      <PetForOption>
        <InputOption
          type="radio"
          name="category"
          id="sell"
          value="sell"
          checked={category === SELL}
          onChange={handleInputChange}
        />
        <OptionInner htmlFor="sell" active={category === SELL}>
          sell
        </OptionInner>
      </PetForOption>

      <PetForOption>
        <InputOption
          type="radio"
          name="category"
          id="lost-found"
          value="lost-found"
          checked={category === LOST_FOUND}
          onChange={handleInputChange}
        />
        <OptionInner htmlFor="lost-found" active={category === LOST_FOUND}>
          lost/found
        </OptionInner>
      </PetForOption>

      <PetForOption>
        <InputOption
          type="radio"
          name="category"
          id="in-good-hands"
          value={IN_GOOD_HANDS}
          checked={category === IN_GOOD_HANDS}
          onChange={handleInputChange}
        />
        <OptionInner
          htmlFor="in-good-hands"
          active={category === IN_GOOD_HANDS}
        >
          in good hands
        </OptionInner>
      </PetForOption>
    </FormPetForOptions>
  );
};

export default FormFirstStep;
