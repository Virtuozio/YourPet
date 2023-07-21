import styled from 'styled-components';

import { Link } from 'react-router-dom';

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

  width: 80px;
  height: 80px;

  font-size: 12px;
  color: #fff;

  background-color: #54adff;
  border: none;
  border-radius: 50%;
  box-shadow: 3px 8px 14px 0px #88c6fd30;

  z-index: 1;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: transparent;
  }

  &::before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;

    z-index: -1;

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  & svg {
    stroke: #ffffff;
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

    font-family: Manrope-Bold;
    font-size: 16px;
  }
`;

export { Btn };
