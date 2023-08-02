import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.div`
  width: 256px;
  height: 227px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 545px;
    height: 298px;
  }
`;

const Header = styled.p`
  color: var(--primary-text-color);
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 52px;
  }
`;

const Text = styled.p`
  color: var(--primary-text-color);
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 60px;
  }
`;

const Btn = styled(Link)`
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

export { Section, Header, Text, Btn };
