import { useEffect, useRef } from 'react';
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
}) => {
  const datePickerRef = useRef('#birthday-date');

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
            onBlur={handleBlur}
            style={errors.title && touched.title && { borderColor: '#f43f5e' }}
          />
          {errors.title && touched.title && (
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
          onBlur={handleBlur}
          style={errors.name && touched.name && { borderColor: '#f43f5e' }}
        />
        {errors.name && touched.name && <ErrorInput>{errors.name}</ErrorInput>}
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
          onBlur={handleBlur}
          style={errors.date && touched.date && { borderColor: '#f43f5e' }}
        />
        {errors.date && touched.date && <ErrorInput>{errors.date}</ErrorInput>}
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
          onBlur={handleBlur}
          style={errors.type && touched.type && { borderColor: '#f43f5e' }}
        />
        {errors.type && touched.type && <ErrorInput>{errors.type}</ErrorInput>}
      </DetailsItem>
    </DetailsWrapper>
  );
};

export default FormSecondStep;
