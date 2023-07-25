import styled from 'styled-components';
import { FaPaw } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';

export const ContainerForm = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  display: inline-block;
  margin-top: 20px;
  margin-bottom: 37px;
  padding: 8px;
  padding-bottom: 16px;

  border-radius: 40px;

  box-shadow: 3px 8px 14px 0px #88c6fd30;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    padding: 20px 32px;
  }
`;

export const Title = styled.h1.withConfig({
  shouldForwardProp: prop => prop !== 'category' && prop !== 'page',
})`
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 24px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.36;

  @media screen and (min-width: 768px) {
    font-size: 28px;

    @media screen and (min-width: 768px) {
      ${({ category, page }) =>
        category !== 'your pet' &&
        !page.first &&
        `
      text-align: center;
    `}
    }
  }
`;

export const FormPet = styled.form``;

export const FormStepsStage = styled.ul.withConfig({
  shouldForwardProp: prop => prop !== 'category' && prop !== 'page',
})`
  display: flex;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    ${({ category, page }) =>
      category !== 'your pet' &&
      !page.first &&
      `
      justify-content: center;
    `}
  }
`;

export const FormStep = styled.li.withConfig({
  shouldForwardProp: prop => prop !== 'active' && prop !== 'done',
})`
  &:not(:last-child) {
    margin-right: 12px;
  }
  width: 80px;

  font-size: 10px;
  font-weight: 500;
  line-height: 1.36;
  color: ${({ active, done }) => {
    if (active) {
      return '#54ADFF';
    } else if (done) {
      return '#00C3AD';
    } else {
      return '#888888';
    }
  }};

  &::after {
    content: '';
    display: block;
    margin-top: 12px;
    width: 100%;
    height: 8px;
    background-color: ${({ active, done }) => {
      if (active) {
        return '#54ADFF';
      } else if (done) {
        return '#00C3AD';
      } else {
        return '#cce4fb';
      }
    }};
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    font-size: 16px;
    line-height: 1.65;

    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`;

export const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 4px;

  color: #111111;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.36;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.32;
    margin-bottom: 8px;
  }
`;

export const FormInput = styled.input`
  box-sizing: border-box;

  display: block;
  width: 100%;

  padding: 9.5px 16px;

  font-size: 14px;
  line-height: 1.5;
  color: #888888;

  border: 1px solid #54adff;
  border-radius: 40px;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    line-height: 1.5;
    color: #888888;
  }

  @media screen and (min-width: 768px) {
    padding-top: 12px;
    padding-bottom: 12px;

    font-size: 16px;

    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 24px;
  }
`;

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;

  width: 100%;

  padding: 9px 0;

  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.36;
  border: none;

  border-radius: 40px;
  border-color: transparent;
`;
export const NextBtn = styled(ButtonContainer)`
  width: 248px;
  color: #fef9f9;

  background-color: #54adff;
`;

export const PawIcon = styled(FaPaw)`
  font-size: 21px;
  stroke-width: 30px;
  stroke: #fef9f9;
  fill: transparent;
  transform: rotate(25deg);
`;

export const CancelBtn = styled(ButtonContainer)`
  width: 94px;
  padding: 0;
  color: #54adff;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    margin-left: 28px;
  }
`;

export const ArrowLeftIcon = styled(BsArrowLeft)`
  font-size: 24px;
  fill: #54adff;
`;
