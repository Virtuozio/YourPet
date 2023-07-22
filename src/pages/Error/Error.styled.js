import styled from 'styled-components';

const Text = styled.p`
  width: 100%;
  margin: 0;
  margin-top: 60px;
  font-family: Manrope-Bold;
  font-size: 24px;
  text-align: center;
  line-height: normal;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  margin: 0 auto;
  border: none;
  border-radius: 40px;
  background-color: #54adff;
  font-family: Manrope-Bold;
  color: #fef9f9;
  font-size: 16px;
  width: 248px;
  padding: 8px 28px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

const Container = styled.div`
  width: 100%;
  padding-left: 15px px;
  padding-right: 15px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

const Image = styled.img``;

export { Text, Button, Container, Image };
