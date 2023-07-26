import React from 'react';

import { Section, Header, Text, Btn } from './ModalCongrats.styled';

import { Pawprint } from 'utils/icons';


const ModalCongrats = () => {
  return (
    <Section>
      <Header>Congrats!</Header>
      <Text>Youre registration is success</Text>
      <Btn
        to="/user"
      >
        Go to profile<Pawprint/>
      </Btn>
    </Section>
  );
};

export default ModalCongrats;
