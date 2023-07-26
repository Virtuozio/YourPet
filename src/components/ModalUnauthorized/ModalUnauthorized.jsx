import React from 'react';

import { Pawprint } from 'utils/icons';

import {
  Section,
  Header,
  Text,
  BtnLogIn,
  BtnRegister,
  BtnsWrapper,
} from './ModalUnauthorized.styled';

const ModalUnauthorized = () => {
  return (
    <Section>
      <Header>Attention</Header>
      <Text>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </Text>
      <BtnsWrapper>
        <BtnLogIn to="/login">
          Log IN
          <Pawprint />
        </BtnLogIn>
        <BtnRegister to="/register" >
          Register
        </BtnRegister>
      </BtnsWrapper>
    </Section>
  );
};

export default ModalUnauthorized;
