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

export const User = styled.div`
  display: flex;
  gap: 38px;
  margin-left: auto;
  margin-right: 0;
`;

export const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 0;
`;

export const CloseBurger = styled.button``;
