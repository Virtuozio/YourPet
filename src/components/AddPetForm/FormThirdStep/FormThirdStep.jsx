import { useState } from 'react';
import { FormInput, FormLabel } from '../AddPetForm.styled';
import {
  FormTextArea,
  ImgPlus,
  LoaderImgWrapper,
  LoaderInputFile,
  LoaderLabelImg,
  LoaderTitle,
  FemaleIcon,
  MaleIcon,
  GenderType,
  GenderTypesWrapper,
  TheSexWrapper,
  MainContainer,
  LeftContainer,
  RightContainer,
  FormGenderLabel,
  FormItem,
} from './FormThirdStep.styled';

const FormThirdStep = ({ allSettings }) => {
  const [choosenGender, setChoosenGender] = useState('');

  const onGenderClick = e => {
    const elem = e.currentTarget;
    setChoosenGender(elem.textContent);
  };

  return (
    <>
      <MainContainer category={allSettings.category}>
        <LeftContainer>
          {allSettings.category !== 'your pet' && (
            <TheSexWrapper category={allSettings.category}>
              <FormGenderLabel category={allSettings.category}>
                The sex
              </FormGenderLabel>
              <GenderTypesWrapper>
                <GenderType
                  active={choosenGender === 'Female'}
                  onClick={onGenderClick}
                >
                  {choosenGender === 'Female' && (
                    <FemaleIcon
                      style={{
                        fill: '#ffffff',
                      }}
                    />
                  )}
                  {choosenGender === 'Male' && (
                    <FemaleIcon
                      style={{
                        fill: '#888888',
                      }}
                    />
                  )}
                  {choosenGender === '' && (
                    <FemaleIcon
                      style={{
                        fill: '#f43f5e',
                      }}
                    />
                  )}
                  Female
                </GenderType>
                <GenderType
                  active={choosenGender === 'Male'}
                  onClick={onGenderClick}
                >
                  {choosenGender === 'Male' && (
                    <MaleIcon
                      style={{
                        fill: '#ffffff',
                      }}
                    />
                  )}
                  {choosenGender === 'Female' && (
                    <MaleIcon
                      style={{
                        fill: '#888888',
                      }}
                    />
                  )}
                  {choosenGender === '' && (
                    <MaleIcon
                      style={{
                        fill: '#54adff',
                      }}
                    />
                  )}
                  Male
                </GenderType>
              </GenderTypesWrapper>
            </TheSexWrapper>
          )}
          <LoaderImgWrapper category={allSettings.category}>
            <LoaderTitle category={allSettings.category}>
              {true ? "Load the pet's image:" : 'Add photo'}
            </LoaderTitle>
            <LoaderLabelImg htmlFor="loader">
              <ImgPlus />
            </LoaderLabelImg>
            <LoaderInputFile type="file" id="loader" />
          </LoaderImgWrapper>
        </LeftContainer>

        <RightContainer category={allSettings.category}>
          {allSettings.category !== 'your pet' && (
            <FormItem category={allSettings.category}>
              <FormLabel htmlFor="location">Location</FormLabel>
              <FormInput
                type="text"
                id="location"
                placeholder="Type location pet"
              />
            </FormItem>
          )}
          {allSettings.category === 'sell' && (
            <FormItem category={allSettings.category}>
              <FormLabel htmlFor="price">Price</FormLabel>
              <FormInput
                type="text"
                id="price"
                placeholder="Type price of pet"
              />
            </FormItem>
          )}

          <FormItem category={allSettings.category}>
            <FormLabel htmlFor="comments">Comments</FormLabel>
            <FormTextArea
              type="textarea"
              id="comments"
              placeholder="Type of pet"
              rows="5"
              category={allSettings.category}
            />
          </FormItem>
        </RightContainer>
      </MainContainer>
    </>
  );
};

export default FormThirdStep;
