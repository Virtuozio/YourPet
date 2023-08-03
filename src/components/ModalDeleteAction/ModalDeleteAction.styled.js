import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import { FiTrash2 } from "react-icons/fi";


const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  /* height: 445px; */
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    width: 608px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 40px;
    /* height: 429px; */
  }
`;

const Section = styled.div`
  height: 329px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 296px;
  }
`;

const Header = styled.p`
  width: 200px;
  text-align: center;

  color: var(--primary-text-color);
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

const DeleteText = styled.p`
  color: var(--primary-text-color);
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 44px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 48px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 17px;
  }
`;

const BtnCancel = styled.button`
  width: 256px;
  height: 40px;
  cursor: pointer;
  padding: 9px 0px;

  background: transparent;
  border-width: 2px;
  border-color: var(--btn-bg-color);
  border-style: solid;
  border-radius: 40px;
  font-size: 16px;

  color: var(--btn-bg-color);
  font-size: 16px;
  font-weight: 700;

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: var(--label-active-color);
  }

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

const BtnYes = styled.button`
  width: 256px;
  height: 40px;
  cursor: pointer;
  padding: 9px 0px;

  background: var(--btn-bg-color);
  border: none;
  border-radius: 40px;
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: var(--label-active-color);
  font-size: 16px;
  font-weight: 700;

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

const TrashIcon = styled(FiTrash2)`
  width: 24px;
  height: 24px;
  color: #fef9f9;
`;



export {
  Section,
  Header,
  TrashIcon,
  BtnWrapper,
  ModalBox,
  BtnCancel,
  BtnYes,
  DeleteText,
};
