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
  align-items: center;
  margin-left: auto;
  margin-right: 0;
`;

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const AuthBtn = styled.button`
  display: flex;
  width: 165px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid #ffc107;
  background: ${props => (props.login ? '#ffc107' : '#fef9f9')};

  color: ${props => (props.login ? '#fef9f9' : '#ffc107')};
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  svg {
    fill: #fef9f9;
  }
`;

export const CloseBurger = styled.button``;
