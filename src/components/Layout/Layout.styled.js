import styled from 'styled-components';

export const LayoutContainer = styled.div`
  box-sizing: border-box;
  min-width: 320px;
  margin: 0 auto;

  padding: 20px 20px 0;

  position: relative;

  @media screen and (min-width: 768px) {
    // min-width: 768px;
    padding: 24px 32px 0;
  }
  @media screen and (min-width: 1200px) {
    // min-width: 1200px;
    padding: 20px 16px 0;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.28px;
  color: #111111;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    letter-spacing: 1.92px;
  }
  &:hover,
  &:focus {
    color: #ffc107;
  }
  &.active {
    pointer-events: none;
    color: #ffc107;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const NavBurger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  gap: 20px;
  margin-top: 92px;
  position: absolute;
  z-index: 10;
  overflow: hidden;
  // transform: translateX(-100%);
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
