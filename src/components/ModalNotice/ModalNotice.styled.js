
import styled from 'styled-components';
// import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { RxCross1 } from 'react-icons/rx';
import Box from '@mui/material/Box';


const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  /* height: 445px; */
  padding-top: 50px;
  padding-bottom: 16px;
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    width: 608px;
    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-radius: 40px;
    /* height: 429px; */
  }
`;

const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
  }
`;


const PetPhoto = styled.img`
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  background-color: pink;
  span {
    position: absolute;
    top: 22px;
    left: 0;
    padding: 11px 22px 11px 12px;
    background-color: var(--labels-bg-color);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 262px;
    height: 298px;
  }
`;

const CategoryItem = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 20px;
  top: 16px;
  width: 132px;
  height: 32px;
  background-color: var(--labels-bg-color);
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;

  @media screen and (min-width: 768px) {
    left: 0;
  top: 16px;
  }
`;

const PhotoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;
`;

const Title = styled.h2`
display: flex;
  justify-content: start;
  align-items: center;
  width: 198px;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.24px;
  margin: 0;
  margin-left: 12px;
  margin-top: 12px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    letter-spacing: -0.28px;
    /* margin-bottom: 20px; */
    width: 321px;
    margin-left: 0px;
    margin-top: 0px;
    
  }
`;
const Info = styled.div`
display: grid; 
  grid-template-columns: auto auto; 
  grid-template-rows: 19px 19px 19px 
grid; 
  grid-template-columns: auto auto;  
  gap: 10px 0px; 
  margin-left: 12px;
  @media screen and (min-width: 768px) {
    
    margin-left: 0px;
    
  }
 `;

const Tag = styled.div`
  color: #000;
  font-size: ${props => (props.$value ? '12px' : '14px')};
  font-weight: ${props => (props.$value ? '500' : '600')};
  line-height: normal;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const Comment = styled.span`
  display: flex;
  align-items: flex-start;
  width: 256px;
  margin-top: 12px;
  margin-left: 12px;
  @media screen and (min-width: 768px) {
    width: 618px;
    margin-top: 28px;
    margin-bottom: 70px;
    margin-left: 0px;
  }
`;
const Text = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.64px;
  }
`;

const Bold = styled.b`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;
  float: left;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.64px;
  }
`;

const Button = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'active',
})`
  display: flex;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 40px;
  border: 2px solid #54adff;
  background-color: ${({ primary }) =>
    primary ? 'transparent' : 'var(--btn-bg-color)'};
  cursor: pointer;
  &:first-child {
    margin-bottom: 8px;
  }
  &:hover {
    background: var(--hover-btn-bg-color);
    p {
      color: var(--label-active-color);
    }
  }
  p {
    color: ${({ primary }) =>
      primary ? 'var(--btn-bg-color)' : 'var(--label-active-color)'};
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.64px;
  }
  svg {
    fill: #fff;
  }
  @media screen and (min-width: 768px) {
    width: 129px;
    height: 40px;
    margin-left: 0px;
  margin-right: 0px;
  &:first-child {
    margin-bottom: 0px;
  }
  }
`;

const AddButton = styled.button`
  display: flex;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 40px;
  border: 2px solid var(--btn-bg-color);
  background-color: transparent;
  cursor: pointer;

  svg {
    fill: var(--btn-bg-color);
  }

  &:first-child {
    margin-bottom: 8px;
  }
  &:hover {
    background: var(--hover-btn-bg-color);

    svg {
      fill: #fff;
    }

    p {
      color: var(--label-active-color);
    }
  }
  p {
    color: ${props =>
      !props.$primary ? 'var(--btn-bg-color)' : 'var(--label-active-color)'};
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.64px;
  }
  svg {
    fill: var(--btn-bg-color);
  }
  @media screen and (min-width: 768px) {
    width: 129px;
    height: 40px;
    margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  }
`;

const RemoveButton = styled.button`
  display: flex;
  width: 256px;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 40px;
  border: 2px solid #54adff;
  background-color: ${props =>
    props.$primary ? 'transparent' : 'var(--btn-bg-color)'};
  cursor: pointer;
  &:first-child {
    margin-bottom: 8px;
  }
  &:hover {
    background: var(--hover-btn-bg-color);
    p {
      color: var(--label-active-color);
    }
  }
  p {
    color: ${props =>
      props.$primary ? 'var(--btn-bg-color)' : 'var(--label-active-color)'};
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.64px;
  }
  svg {
    fill: #fff;
  }
  @media screen and (min-width: 768px) {
    width: 190px;
    height: 40px;
    margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  }
`;

const StyledLink = styled(Link)`
  color: #ffc107;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: ${props => (props.$privat ? 'underline' : 'none')};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
const Container = styled.div`
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;
    justify-content: flex-start;
    gap: 17px;
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
  Wrapper,
  PetPhoto,
  Title,
  CategoryItem,
  PhotoContainer,
  Info,
  Tag,
  Comment,
  Text,
  Bold,
  Button,
  AddButton,
  RemoveButton,
  StyledLink,
  Container,
  ModalCloseBtn,
  ModalCloseBtnIcon
  
};
