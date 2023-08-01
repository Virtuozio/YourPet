import { useEffect, useRef, useState } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { YOUR_PET } from 'utils/constants/typesAddPet';

import { ErrorInput, FormInput, FormLabel } from '../AddPetForm.styled';
import { DetailsItem, DetailsWrapper } from './FormSecondStep.styled';

const FormSecondStep = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {
  const datePickerRef = useRef('#birthday-date');
  const [inputsErrors, setInputsErrors] = useState({});

  useEffect(() => {
    const datepicker = flatpickr(datePickerRef.current, {
      disableMobile: 'true',
      maxDate: 'today',
      dateFormat: 'd-m-Y',
      altFormat: 'd-m-Y',

      onChange: selectedDates => {
        const selectedDate = selectedDates[0];
        if (selectedDate) {
          const formattedDate = selectedDate
            .toLocaleDateString('en-GB')
            .replace(/\//g, '-');
          handleChange({ target: { name: 'date', value: formattedDate } });
        }
      },
    });

    return () => {
      datepicker.destroy();
    };
  }, [handleChange]);

  useEffect(() => {
    if (isSubmitting) {
      setInputsErrors(touched);
    }
  }, [isSubmitting, touched]);

  const handleInputBlur = e => {
    const { name } = e.target;
    setInputsErrors({ ...inputsErrors, [name]: true });
    handleBlur(e);
  };

  return (
    <DetailsWrapper>
      {values.category !== YOUR_PET && (
        <DetailsItem>
          <FormLabel htmlFor="title">Title of add</FormLabel>
          <FormInput
            type="text"
            id="title"
            name="title"
            placeholder="Title of add"
            value={values.title}
            onChange={handleChange}
            onBlur={handleInputBlur}
            style={
              errors.title && inputsErrors.title && { borderColor: '#f43f5e' }
            }
          />
          {errors.title && inputsErrors.title && (
            <ErrorInput>{errors.title}</ErrorInput>
          )}
        </DetailsItem>
      )}

      <DetailsItem>
        <FormLabel htmlFor="name">Pet's name</FormLabel>
        <FormInput
          type="text"
          id="name"
          name="name"
          placeholder="Type name pet"
          value={values.name}
          onChange={handleChange}
          onBlur={handleInputBlur}
          style={errors.name && inputsErrors.name && { borderColor: '#f43f5e' }}
        />
        {errors.name && inputsErrors.name && (
          <ErrorInput>{errors.name}</ErrorInput>
        )}
      </DetailsItem>

      <DetailsItem>
        <FormLabel htmlFor="birthday-date">Date of birth</FormLabel>
        <FormInput
          type="text"
          id="birthday-date"
          name="date"
          placeholder="Type date of birthday"
          value={values.date}
          onChange={handleChange}
          onBlur={handleInputBlur}
          style={errors.date && inputsErrors.date && { borderColor: '#f43f5e' }}
        />
        {errors.date && inputsErrors.date && (
          <ErrorInput>{errors.date}</ErrorInput>
        )}
      </DetailsItem>

      <DetailsItem>
        <FormLabel htmlFor="type">Type</FormLabel>
        <FormInput
          type="text"
          id="type"
          name="type"
          placeholder="Type of pet"
          value={values.type}
          onChange={handleChange}
          onBlur={handleInputBlur}
          style={errors.type && inputsErrors.type && { borderColor: '#f43f5e' }}
        />
        {errors.type && inputsErrors.type && (
          <ErrorInput>{errors.type}</ErrorInput>
        )}
      </DetailsItem>
    </DetailsWrapper>
  );
};

export default FormSecondStep;
