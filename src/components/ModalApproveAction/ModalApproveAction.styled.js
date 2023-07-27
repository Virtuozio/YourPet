import styled from 'styled-components';

import { CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Section = styled.div`
  width: 256px;
  height: 242px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 545px;
    height: 298px;
  }
`;

const Header = styled.p`
  color: #111111;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 48px;
  }
`;

const BtnsWrapper = styled.div`
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
  border-color: #54adff;
  border-style: solid;
  border-radius: 40px;
  font-size: 16px;

  color: #54adff;
  font-size: 16px;
  font-weight: 700;

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
  }

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

const BtnYes = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;
  text-align: center;

  width: 256px;
  height: 40px;
  cursor: pointer;
  padding: 9px 0px;

  background: #54adff;
  border: none;
  border-radius: 40px;
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: #fef9f9;
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

const LogoutIcon = styled(CiLogout)`
  width: 24px;
  height: 24px;
  fill: #fef9f9;
  stroke-width: 0.5;
`;

export { Section, Header, LogoutIcon, BtnsWrapper, BtnCancel, BtnYes };
