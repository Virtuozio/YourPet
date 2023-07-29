import styled from '@emotion/styled';

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: 0;
`;

export const CloseBurger = styled.button``;
