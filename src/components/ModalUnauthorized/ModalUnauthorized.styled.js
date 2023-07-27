import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Section = styled.div`
  width: 256px;
  height: 385px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  @media screen and (min-width: 768px) {
    width: 545px;
    height: 373px;
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

  width: 248px;
  height: 40px;
  cursor: pointer;
  padding: 8px 0px;

  color: #fef9f9;
  font-weight: 700;
  font-size: 16px;

  background: #ffc107;
  border: none;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`;

const BtnRegister = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;
  text-align: center;

  width: 248px;
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

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`;

export { Section, Header, Text, BtnLogIn, BtnRegister, BtnsWrapper };
