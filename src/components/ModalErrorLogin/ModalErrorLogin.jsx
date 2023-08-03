import React from 'react';
import errorLogin from 'assets/images/errorpage/error.png';

import {
  Section,
  Container,
  Header,
  Text,
  Btn,
} from './ModalErrorLogin.styled';

export const ModalErrorLogin = ({ onClose }) => {
  return (
    <Section>
      <Container>
        <img src={errorLogin} alt="" width="50" />
        <Header>Opps... devil animals!!!</Header>
        <Text>There was an error with your login credentials.</Text>
        <Btn onClick={onClose}>Close</Btn>
      </Container>
    </Section>
  );
};
