import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import validationAddPetSchema from 'utils/schemas/addPetValidationSchema';

import {
  YOUR_PET,
  SELL,
  LOST_FOUND,
  IN_GOOD_HANDS,
} from 'utils/constants/typesAddPet';

import FormFirstStep from './FormFirstStep/FormFirstStep';
import FormSecondStep from './FormSecondStep/FormSecondStep';
import FormThirdStep from './FormThirdStep/FormThirdStep';

import {
  ArrowLeftIcon,
  BtnsWrapper,
  CancelBtn,
  ContainerForm,
  FormPet,
  FormStep,
  FormStepsStage,
  NextBtn,
  PawIcon,
  Title,
} from './AddPetForm.styled';
import { addPet } from 'redux/pets/petsOperations';

const AddPetForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentValidationSchema, setCurrentValidationSchema] = useState(
    validationAddPetSchema.categoryValidation
  );
  const [currentForm, setcurrentForm] = useState({
    first: true,
    second: false,
    third: false,
  });

  const initialValues = {
    category: '',
    title: '',
    name: '',
    date: '',
    type: '',
    sex: '',
    file: '',
    location: '',
    price: 0,
    comments: '',
  };

  function nextPageForm() {
    const keysForm = Object.keys(currentForm);

    const trueKey = keysForm.find(key => currentForm[key] === true);
    const indexTrueKey = keysForm.indexOf(trueKey);

    const newTrueKey = keysForm[indexTrueKey + 1];

    setcurrentForm(prevState => ({
      ...prevState,
      [trueKey]: false,
      [newTrueKey]: true,
    }));
  }

  const {
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    handleChange,
    handleSubmit,
    setErrors,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: currentValidationSchema,
    onSubmit: () => {
      let formValues = {};
      let typeSchema = '';
      const {
        name,
        date,
        type,
        title,
        file,
        category,
        sex,
        price,
        location,
        comments,
      } = values;

      if (currentForm.first) {
        typeSchema = 'categoryValidation';
        setCurrentValidationSchema(validationAddPetSchema[typeSchema]);
        nextPageForm();
      } else if (currentForm.second) {
        if (category === YOUR_PET) {
          typeSchema = 'secValidYourPet';
          setCurrentValidationSchema(validationAddPetSchema[typeSchema]);
          formValues = { name, date, type };
        } else {
          typeSchema = 'secValidNoYours';
          setCurrentValidationSchema(validationAddPetSchema[typeSchema]);
          formValues = { title, name, date, type };
        }

        validationAddPetSchema[typeSchema]
          .validate(formValues, {
            abortEarly: false,
          })
          .then(() => {
            if (Object.keys(errors).length === 0) {
              nextPageForm();
            }
          })
          .catch(errs => {
            const formErrors = {};
            errs.inner.forEach(
              error => (formErrors[error.path] = error.message)
            );
            setErrors(formErrors);
          });
      } else if (currentForm.third) {
        if (category === YOUR_PET) {
          typeSchema = 'thirdValidYourPet';
          setCurrentValidationSchema(validationAddPetSchema[typeSchema]);
          formValues = { file, comments };
        } else if (category === SELL) {
          typeSchema = 'thirdValidSell';
          setCurrentValidationSchema(validationAddPetSchema[typeSchema]);
          formValues = { file, comments, price, sex, location };
        } else if (category === LOST_FOUND || category === IN_GOOD_HANDS) {
          typeSchema = 'thirdValidLostFoundAndGoodHands';
          setCurrentValidationSchema(validationAddPetSchema[typeSchema]);
          formValues = { file, comments, sex, location };
        }

        validationAddPetSchema[typeSchema]
          .validate(formValues, {
            abortEarly: false,
          })
          .then(() => {
            if (Object.keys(errors).length === 0) {
              dispatch(addPet(values));
            }
          })
          .catch(errs => {
            const formErrors = {};
            errs.inner.forEach(
              error => (formErrors[error.path] = error.message)
            );
            setErrors(formErrors);
          });
      }
    },
  });

  const handleCancel = () => {
    if (currentForm.first) {
      navigate(-1);
    }

    const keysForm = Object.keys(currentForm);

    const trueKey = keysForm.find(key => currentForm[key] === true);
    const indexTrueKey = keysForm.indexOf(trueKey);

    const newTrueKey = keysForm[indexTrueKey - 1];

    setcurrentForm(prevState => {
      return {
        ...prevState,
        [trueKey]: false,
        [newTrueKey]: true,
      };
    });
  };

  return (
    <>
      <ContainerForm>
        <>
          {(values.category === YOUR_PET || values.category === '') && (
            <Title category={values.category} page={currentForm}>
              Add pet
            </Title>
          )}
          {values.category === IN_GOOD_HANDS && (
            <Title category={values.category} page={currentForm}>
              Add pet
            </Title>
          )}
          {values.category === SELL && (
            <Title category={values.category} page={currentForm}>
              Add pet for sell
            </Title>
          )}
          {values.category === LOST_FOUND && (
            <Title category={values.category} page={currentForm}>
              Add lost pet
            </Title>
          )}
        </>
        <FormPet autoComplete="off" onSubmit={handleSubmit}>
          <FormStepsStage category={values.category} page={currentForm}>
            <FormStep
              active={currentForm.first}
              done={currentForm.second || currentForm.third}
            >
              Choose option
            </FormStep>
            <FormStep active={currentForm.second} done={currentForm.third}>
              Personal details
            </FormStep>
            <FormStep active={currentForm.third}>More info</FormStep>
          </FormStepsStage>
          {currentForm.first && (
            <FormFirstStep
              active={currentForm.first}
              category={values.category}
              handleChange={handleChange}
              resetForm={resetForm}
              initialValues={initialValues}
              setFieldValue={setFieldValue}
            />
          )}
          {currentForm.second && (
            <FormSecondStep
              values={values}
              handleChange={handleChange}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
            />
          )}
          {currentForm.third && (
            <FormThirdStep
              category={values.category}
              values={values}
              handleChange={handleChange}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
            />
          )}

          <BtnsWrapper>
            <NextBtn type="submit">
              {currentForm.third ? 'Done' : 'Next'}
              <PawIcon />
            </NextBtn>

            <CancelBtn type="button" onClick={handleCancel}>
              <ArrowLeftIcon />
              {!currentForm.first ? 'Back' : 'Сancel'}
            </CancelBtn>
          </BtnsWrapper>
        </FormPet>
      </ContainerForm>
    </>
  );
};

export default AddPetForm;
