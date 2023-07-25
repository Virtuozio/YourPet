import React, { useState } from 'react';
// import { useFormik } from 'formik';

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

const AddPetForm = () => {
  const [allSettings, setAllSettings] = useState({ category: '' });
  const [currentForm, setcurrentForm] = useState({
    first: true,
    second: false,
    third: false,
  });

  const handleCancel = e => {
    if (currentForm.first) return;

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

  const onSubmitBtn = e => {
    // e.preventDefault();
    //  || allSettings.category === ''
    if (currentForm.third) return;

    const keysForm = Object.keys(currentForm);

    const trueKey = keysForm.find(key => currentForm[key] === true);
    const indexTrueKey = keysForm.indexOf(trueKey);

    const newTrueKey = keysForm[indexTrueKey + 1];

    setcurrentForm(prevState => ({
      ...prevState,
      [trueKey]: false,
      [newTrueKey]: true,
    }));
  };

  // const formik = useFormik({
  //   initialValues: {
  //     petType: '',
  //   },
  // });

  return (
    <>
      <ContainerForm>
        {(allSettings.category === 'your pet' ||
          allSettings.category === '') && (
          <Title category={allSettings.category} page={currentForm}>
            Add pet
          </Title>
        )}
        {allSettings.category === 'in good hands' && (
          <Title category={allSettings.category} page={currentForm}>
            Add pet
          </Title>
        )}
        {allSettings.category === 'sell' && (
          <Title category={allSettings.category} page={currentForm}>
            Add pet for sell
          </Title>
        )}
        {allSettings.category === 'lost/found' && (
          <Title category={allSettings.category} page={currentForm}>
            Add lost pet
          </Title>
        )}
        <FormPet autoComplete="off">
          <FormStepsStage category={allSettings.category} page={currentForm}>
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
              addToGeneralSetting={setAllSettings}
            />
          )}
          {currentForm.second && <FormSecondStep allSettings={allSettings} />}
          {currentForm.third && <FormThirdStep allSettings={allSettings} />}
          <BtnsWrapper>
            <NextBtn type="button" onClick={onSubmitBtn}>
              {!currentForm.third ? 'Next' : 'Done'}
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
