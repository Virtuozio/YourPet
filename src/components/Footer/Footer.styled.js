import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Footer = styled.div``;


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 20px 0;
  margin: 0;
  background-color: var(--btn-bg-color);
`;

export const MenuItem = styled(Link)`
  color: var(--secondary-bg-color);
  text-decoration: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  &:hover,
  &:focus {
    color: var(--header-items-color);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;
export const Nav = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    gap: 24px;
  }
  @media screen and (min-width: 1280px) {
    gap: 32px;
  }
`;

export const Text = styled.p`
  text-align: center;
  color: var(--secondary-bg-color);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 52px;
  }
`;
export const TextContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (min-width: 1280px) {
    align-items: center;
  }
`;

export const ButtonAbout = styled.button`
  border-radius: 40px;
  background-color: var(--header-items-color);
  color: #ffffff;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 12px 20px 12px 20px;
  border: none;
  margin-top: 10px;
  &:hover,
  &:focus {
    background: transparent;
    border: 2px solid var(--header-items-color);
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 12px 30px 12px 30px;
    margin-top: 15px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    padding: 12px 40px 12px 40px;
    margin-top: 20px;
  }
`;

export const Buttons = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    gap: 10px;
    display: flex;
    flex-direction: column;
  }
`;
