import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  align-items: center;

  //   width: 100%;
`;

// export const BurgerMenu = styled.button;
export const MenuBurger = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  margin-left: auto;
  margin-right: 0;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const User = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  p {
    @media screen and (min-width: 768px) {
      color: var(--header-items-color);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.64px;
      margin-left: 12px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
