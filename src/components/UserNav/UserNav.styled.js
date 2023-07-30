import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const User = styled.a`
  @media screen and (min-width: 768px) {
    color: #ffc107;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.64px;
    margin-left: 12px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Container = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const LogoutBtn = styled.button`
  display: inline-flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #54adff;
  border-radius: 40px;
  border-color: transparent;
  outline: transparent;
  cursor: pointer;

  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  color: #fef9f9;
  transition: background linear ease-in-out;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
