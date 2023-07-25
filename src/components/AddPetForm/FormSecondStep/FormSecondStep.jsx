import { FormInput, FormLabel } from '../AddPetForm.styled';
import { DetailsItem, DetailsWrapper } from './FormSecondStep.styled';

const FormSecondStep = ({ allSettings }) => {
  return (
    <DetailsWrapper>
      {allSettings.category === 'sell' && (
        <DetailsItem>
          <FormLabel htmlFor="name">Title of add</FormLabel>
          <FormInput type="text" id="name" placeholder="Title of add" />
        </DetailsItem>
      )}
      <DetailsItem>
        <FormLabel htmlFor="name">Pet's name</FormLabel>
        <FormInput type="text" id="name" placeholder="Type name pet" />
      </DetailsItem>
      <DetailsItem>
        <FormLabel htmlFor="birthday">Date of birth</FormLabel>
        <FormInput type="text" id="birthday" placeholder="Type date of birth" />
      </DetailsItem>
      <DetailsItem>
        <FormLabel htmlFor="type">Type</FormLabel>
        <FormInput type="text" id="type" placeholder="Type of pet" />
      </DetailsItem>
    </DetailsWrapper>
  );
};

export default FormSecondStep;
