import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { BsPlus, BsPlusLg } from 'react-icons/bs';

const Btn = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;

  position: fixed;
  top: 420px;
  right: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  color: #ffffff;
  font-weight: 600;

  width: 80px;
  height: 80px;
  padding: 20px 17px;
  // padding-top: 20px;
  // padding-right: 17px;
  // padding-bottom: 16px;
  // padding-left: 18px;

  font-size: 12px;
  color: #fff;

  background: var(--btn-bg-color);
  border: none;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px #88c6fd30;

  z-index: 1;

  transition: background var(--duration) var(--cubic);

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    position: static;
    translate: 0 0;

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
