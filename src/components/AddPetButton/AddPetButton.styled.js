import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { BsPlus, BsPlusLg } from 'react-icons/bs';

const Btn = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  position: fixed;
  top: 460px;
  right: 20px;

  color: #ffffff;
  font-weight: 600;

  width: 80px;
  height: 80px;

  font-size: 12px;
  color: #fff;

  background: #54adff;
  border: none;
  border-radius: 50%;
  box-shadow: 3px 8px 14px 0px #88c6fd30;

  z-index: 1;

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  @media screen and (min-width: 768px) {
    position: static;
    translate: 0 0;

    flex-direction: row;
    gap: 8px;

    width: 129px;
    height: 40px;
    padding: 8px 18px;
    border-radius: 40px;

    font-size: 16px;
  }
`;

const PlusIcon = styled(BsPlusLg)`
  width: 24px;
  height: 24px;
  color: #ffffff;
`;

const PlusIconSmall = styled(BsPlus)`
  width: 24px;
  height: 24px;
  color: #ffffff;
`;

export { Btn, PlusIcon, PlusIconSmall };
