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
  color: #111111;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 52px;
  }
`;

const Text = styled.p`
  color: #111111;
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

  color: #fef9f9;
  font-weight: 700;
  font-size: 16px;

  background: #54adff;
  border: none;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;

export { Section, Header, Text, Btn };
