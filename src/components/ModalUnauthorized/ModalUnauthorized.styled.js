import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RxCross1 } from 'react-icons/rx';

import Box from '@mui/material/Box';

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
const ModalTitle = styled.p`
  text-align: center;
  /* font-family: Monrope; */
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;
const ModalText = styled.p`
  text-align: center;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.56px;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

const Header = styled.p`
  color: #111111;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const Text = styled.p`
  color: #111111;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 40px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 40px;
  }
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const BtnLogIn = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;

  width: 240px;
  height: 40px;
  cursor: pointer;
  padding: 8px 0px;

  color: #fef9f9;
  fill: #fff;
  font-weight: 700;
  font-size: 16px;

  background: #ffc107;
  border: none;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #54adff;
  }

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`;

const BtnRegister = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;
  text-align: center;

  width: 240px;
  height: 40px;
  cursor: pointer;
  padding: 8px 0px;

  color: #ffc107;
  font-weight: 600;
  font-size: 16px;

  background: transparent;
  border-width: 2px;
  border-color: #ffc107;
  border-style: solid;
  border-radius: 40px;
  font-size: 16px;

  &:hover {
    color: #54adff;
    border-color: #54adff;
    border-style: solid;
    border-radius: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`;
const ModalCloseBtn = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;

  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    right: 24px;
    top: 24px;
  }
`;

const ModalCloseBtnIcon = styled(RxCross1)`
  width: 24px;
  height: 24px;
  color: #54adff;

  &:hover {
    color: #ffc107;
  }
`;

export {
  ModalBox,
  ModalText,
  ModalTitle,
  Header,
  Text,
  BtnLogIn,
  BtnRegister,
  BtnsWrapper,
  ModalCloseBtnIcon,
  ModalCloseBtn,
};
