import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: 287px;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 354px;
  }
`;

export const Container = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const Header = styled.p`
  color: var(--primary-text-color);
  font-weight: 500;
  font-size: 24px;
  /* margin-bottom: 24px; */

  @media screen and (min-width: 768px) {
    font-size: 36px;
    /* margin-bottom: 52px; */
  }
`;

export const Text = styled.p`
  color: var(--primary-text-color);
  font-weight: 500;
  font-size: 16px;
  /* margin-bottom: 40px; */

  @media screen and (min-width: 768px) {
    font-size: 24px;
    /* margin-bottom: 60px; */
  }
`;

export const Btn = styled(Link)`
  text-decoration: none;
  box-sizing: border-box;
  text-align: center;

  width: 248px;
  height: 40px;
  cursor: pointer;
  padding: 8px 0px;

  color: var(--label-active-color);
  font-weight: 700;
  font-size: 16px;

  background: var(--btn-bg-color);
  border: none;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  transition: background var(--duration) var(--cubic);

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  & svg {
    fill: var(--label-active-color);
  }
`;
