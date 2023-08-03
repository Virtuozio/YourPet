// import styled from 'styled-components';
import styled from '@emotion/styled';
import {
  HiHeart,
  HiOutlineHeart,
  HiOutlineLocationMarker,
  HiOutlineClock,
  //   HiClock,
} from 'react-icons/hi';
import { RiDeleteBinLine } from "react-icons/ri";

import { GiFemale, GiMale } from 'react-icons/gi';
import { Pawprint } from '../../utils/icons';


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
`;

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
  background-color: var(--labels-bg-color);

  border: none;
`;

export const Heart = styled(HiOutlineHeart)`
  width: 24px;
  height: 24px;
  color: var(--btn-bg-color);
`;

export const HeartFill = styled(HiHeart)`
  width: 24px;
  height: 24px;
  color: var(--btn-bg-color);
`;

export const RemoveNoticeBtn = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 68px;
  right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--labels-bg-color);

  border: none;
`

export const RemoveIcon = styled(RiDeleteBinLine)`
  width: 24px;
  height: 24px;
  color: var(--btn-bg-color);
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

  background-color: var(--labels-bg-color);
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
  background-color: var(--labels-bg-color);
  border-radius: 16px;

  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 24px;
  }
`;

export const Location = styled(HiOutlineLocationMarker)`
  width: 24px;
  height: 24px;
  color: var(--btn-bg-color);
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
  background-color: var(--labels-bg-color);
  border-radius: 16px;

  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 128px;
  }
`;

export const AgeCount = styled(HiOutlineClock)`
  width: 24px;
  height: 24px;
  color: var(--btn-bg-color);
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
  background-color: var(--labels-bg-color);
  border-radius: 16px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 232px;
  }
`;

export const Female = styled(GiFemale)`
  width: 24px;
  height: 24px;
  color: var(--btn-bg-color);
  margin-left: 9px;
  /* margin-right: 8px; */
`;

export const Male = styled(GiMale)`
  width: 24px;
  height: 24px;
  color: var(--btn-bg-color);
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
  border-color: var(--btn-bg-color);
  border-style: solid;
  border-radius: 40px;
  color: var(--btn-bg-color);
  fill: var(--btn-bg-color);
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
    background: var(--hover-btn-bg-color);
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


export const PawStyled = styled(Pawprint)`
  margin-left: 8px;
`;
