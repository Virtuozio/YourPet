import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const User = styled.p`
  @media screen and (min-width: 768px) {
    text-decoration: none;
    color: var(--header-items-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.64px;
    margin-left: 12px;
    text-decoration: none;
  }
`;

export const Container = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;

export const LogoutBtn = styled.button`
  display: inline-flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: var(--btn-bg-color);
  border-radius: 40px;
  border-color: transparent;
  outline: transparent;
  cursor: pointer;

  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  color: var(--label-active-color);
  transition: background var(--duration) var(--cubic);

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: var(--hover-btn-bg-color);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
