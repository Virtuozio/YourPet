import styled from 'styled-components';

import { BsPlusLg, BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { FormLabel } from '../AddPetForm.styled';

export const MainContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'category',
})`
  @media screen and (min-width: 768px) {
    ${({ category }) =>
      category !== 'your pet' &&
      `
      display: flex;
      gap: 45px;
    `}
  }
`;

export const LeftContainer = styled.div``;

export const TheSexWrapper = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'category',
})`
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    ${({ category }) =>
      category !== 'your pet' &&
      `
      margin-bottom: 48px;
    `}
  }
`;

export const FormGenderLabel = styled(FormLabel).withConfig({
  shouldForwardProp: prop => prop !== 'category',
})`
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    ${({ category }) =>
      category !== 'your pet' &&
      `
      margin-bottom: 8px;
    `}
  }
`;

export const GenderTypesWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const GenderType = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'active',
})`
  display: flex;
  gap: 12px;
  padding: 8px 16px;
  cursor: pointer;

  ${({ active }) =>
    active
      ? `
  border-radius: 40px;
  background-color: #54ADFF;
  color: #FEF9F9;
  `
      : ''}
`;

export const FemaleIcon = styled(BsGenderFemale)`
  font-size: 16px;
`;

export const MaleIcon = styled(BsGenderMale)`
  font-size: 16px;
  transform: rotate(-45deg);
`;

export const LoaderImgWrapper = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'category',
})`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 14px;

  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    gap: 16px;

    ${({ category }) =>
      category !== 'your pet' &&
      `
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    `}
  }
`;

export const LoaderTitle = styled.h2.withConfig({
  shouldForwardProp: prop => prop !== 'category',
})`
  width: 81px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.36;
  color: #111111;

  @media screen and (min-width: 768px) {
    width: 114px;
    font-size: 20px;
    line-height: 1.4;

    ${({ category }) =>
      category !== 'your pet' &&
      `
      width: 200px;
    `}
  }
`;

export const LoaderLabelImg = styled.label`
  position: relative;
  width: 112px;
  height: 112px;

  background-color: #cce4fb;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
  }
`;

export const ImgPlus = styled(BsPlusLg)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  fill: #54adff;
  font-size: 30px;

  @media screen and (min-width: 768px) {
    font-size: 55px;
  }
`;

export const LoaderInputFile = styled.input`
  display: none;
`;

export const RightContainer = styled.ul.withConfig({
  shouldForwardProp: prop => prop !== 'category',
})`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    ${({ category }) =>
      category !== 'your pet' &&
      `
      width: 395px;
    `}
  }
`;

export const FormItem = styled.li.withConfig({
  shouldForwardProp: prop => prop !== 'category',
})`
  &:last-child {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) {
    &:last-child {
      margin-bottom: 0;
    }
    ${({ category }) =>
      category !== 'your pet' &&
      `
      &:last-child {
    margin-bottom: 0;
  }
    `}
  }
`;

export const FormTextArea = styled.textarea.withConfig({
  shouldForwardProp: prop => prop !== 'category',
})`
  box-sizing: border-box;

  display: block;
  width: 100%;

  padding: 8px 16px;

  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #888888;

  border: 1px solid #54adff;
  border-radius: 20px;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #888888;
  }

  @media screen and (min-width: 768px) {
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 17px;

    font-size: 16px;

    &::placeholder {
      font-size: 16px;
    }

    @media screen and (min-width: 768px) {
      ${({ category }) => {
        if (category === 'lost/found' || category === 'in good hands') {
          return 'height: 195px; margin-bottom: 0';
        } else if (category !== 'your pet') {
          return 'margin-bottom: 60px;';
        }
      }}
    }
  }
`;
