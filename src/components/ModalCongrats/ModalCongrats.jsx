import React from 'react';

import { Section, Header, Text, Btn } from './ModalCongrats.styled';

import { Pawprint } from 'utils/icons';

const ModalCongrats = ({ closeModal }) => {
  return (
    <Section>
      <Header>Congrats!</Header>
      <Text>Your registration is success</Text>
      <Btn onClick={closeModal}>
        Go to profile
        <Pawprint />
      </Btn>
    </Section>
  );
};

export default ModalCongrats;
