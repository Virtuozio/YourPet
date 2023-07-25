import React from 'react';

import { Section, Header, Text, Btn } from './ModalCongrats.styled';

import { Pawprint } from 'utils/icons';


const ModalCongrats = ({closeModal}) => {
  return (
    <Section>
      <Header>Congrats!</Header>
      <Text>Youre registration is success</Text>
      <Btn
        type="button"
        text="Go to profile"
        onClick={closeModal}
      >
        Go to profile<Pawprint/>
      </Btn>
    </Section>
  );
};

export default ModalCongrats;
