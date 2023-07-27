// import styled from 'styled-components';
import styled from '@emotion/styled';
import {
    HiHeart,
  HiOutlineHeart,
  HiOutlineLocationMarker,
  HiOutlineClock,
  //   HiClock,
} from 'react-icons/hi';

import { GiFemale, GiMale } from 'react-icons/gi';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';



import { RxCross1 } from "react-icons/rx";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Pawprint } from '../../utils/icons';
// import { styled } from '@mui/material/styles';



export const NoticesCategoryItemStyled = styled.li`

    display: flex;
   justify-content: start;
   align-items: center;
   flex-direction: column;
   /* flex-wrap: wrap; */
   margin-bottom: 24px;
   margin-right: auto;
   margin-left: auto;

   width: 280px;
   height: 456px;
   background-color: #fff;
   border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);


  @media screen and (min-width: 768px) {
    width: 336px;
   
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
   
   }

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        transform: scale(1.01);        
    }
  `

export const ImageContainer = styled.div`
  position: relative;
  width: 280px;
  height: 288px;

  @media screen and (min-width: 768px) {
    width: 336px;
   
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
   
  }
`;

export const PetImage = styled.img`
  width: 280px;
  height: 288px;

  @media screen and (min-width: 768px) {
    width: 336px;
   
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
    
  }
`;


export const HeartIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c5dff6;

  border: none;
`;

export const Heart = styled(HiOutlineHeart)`
  width: 24px;
  height: 24px;
  color: #54adff;
`;

export const HeartFill = styled(HiHeart)`
  width: 24px;
  height: 24px;
  color: #54adff;
`;

export const FilterStatus = styled.div`
  width: 126px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 16px;
  left: 0;

  background-color: #cce4fb;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const LocationItem = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  position: absolute;
  left: 8px;
  bottom: 12px;

  width: 85px;
  height: 28px;
  background-color: #cce4fb;
  border-radius: 16px;

  white-space: nowrap; /* Текст не переносится */
  overflow: hidden; /* Обрезаем всё за пределами блока */
  text-overflow: ellipsis; /* Добавляем многоточие */

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 24px;
  }
`;

export const Location = styled(HiOutlineLocationMarker)`
  width: 24px;
  height: 24px;
  color: #54adff;
  margin-left: 9px;
  /* margin-right: 8px; */
`;

export const DateItem = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  position: absolute;
  left: 97px;
  bottom: 12px;

  width: 85px;
  height: 28px;
  background-color: #cce4fb;
  border-radius: 16px;

  white-space: nowrap; /* Текст не переносится */
  overflow: hidden; /* Обрезаем всё за пределами блока */
  text-overflow: ellipsis; /* Добавляем многоточие */

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 128px;
  }
`;

export const AgeCount = styled(HiOutlineClock)`
  width: 24px;
  height: 24px;
  color: #54adff;
  /* margin-left: 9px; */
  /* margin-right: 8px; */
`;

export const SexItem = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  position: absolute;
  left: 187px;
  bottom: 12px;

  width: 85px;
  height: 28px;
  background-color: #cce4fb;
  border-radius: 16px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 232px;
  }
`;

export const Female = styled(GiFemale)`
  width: 24px;
  height: 24px;
  color: #54adff;
  margin-left: 9px;
  /* margin-right: 8px; */
`;

export const Male = styled(GiMale)`
  width: 24px;
  height: 24px;
  color: #54adff;
  margin-left: 9px;
  /* margin-right: 8px; */
`;

export const LoadMoreBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
  background-color: white;
  width: 248px;
  height: 38px;
  outline: none;
  border-width: 2px;
  border-color: #54adff;
  border-style: solid;
  border-radius: 40px;
  color: #54adff;
  fill: #54ADFF;
  cursor: pointer;
  margin-bottom: 24px;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #fff;
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
    fill: #fff;
  }

  /* border: none; */
`;


export const NoticeText = styled.p`
  font-size: 24px;
  width: 231px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ModalBox = styled(Box)`
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
`

export const ModalCloseBtn = styled.button`
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
`

export const ModalCloseBtnIcon = styled(RxCross1)`
width: 24px;
height: 24px;
color: #54ADFF;

&:hover{
    color: #FFC107;
  
  }
`

export const ModalTitle = styled(Typography)`
              text-align: center;
              /* font-family: Monrope; */
              font-size: 24px;
              font-weight: 500;
              margin-bottom: 20px;

              @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }


`
export const ModalText = styled(Typography)`
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

`

export const BtnsWrapper = styled.div`
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

export const BtnLogIn = styled(Link)`
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

  &:hover{

  background: #54ADFF;

  }

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`;

export const BtnRegister = styled(Link)`
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

  &:hover{
    color: #54ADFF;
    border-color: #54ADFF;
  border-style: solid;
  border-radius: 40px;

  }

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`;

export const PawStyled = styled(Pawprint)`

margin-left: 8px;

`