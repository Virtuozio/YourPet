import styled from '@emotion/styled';

export const MenuBurger = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  outline: transparent;
  background-color: transparent;
  cursor: pointer;
  color: #ffc107;
  svg {
    width: 24px;
    height: 24px;
  }
`;
export const CloseBurger = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  outline: transparent;
  background-color: transparent;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
    fill: #54adff;
  }
  &:hover {
    svg {
      fill: #ffc107;
    }
  }
`;
export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const MenuBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: calc(100% - 40px);
  height: calc(100% - 44px);
  background-color: #fff;
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuNavBtn = styled.div`
  display: flex;
  flex-direction: ${props => (props.user ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
`;

export const User = styled.a`
  color: #ffc107;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
  margin-left: 12px;
`;

export const LogoutBtn = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 209px;
  height: 44px;
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

  svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    top: 17px;
    left: 560px;
  }
`;
