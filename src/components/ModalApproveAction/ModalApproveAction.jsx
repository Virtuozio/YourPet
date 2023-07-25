import React from 'react';

import {
  Section,
  Header,
  BtnCancel,
  BtnYes,
  LogoutIcon,
  BtnsWrapper,
} from './ModalApproveAction.styled';

const ModalApproveAction = ({ closeModal }) => {
  return (
    <Section>
      <Header>Already leaving?</Header>
      <BtnsWrapper>
        <BtnCancel type="button" onClick={closeModal}>
          Cancel
        </BtnCancel>
        <BtnYes type="button" onClick={closeModal}>
          Yes<LogoutIcon/>
        </BtnYes>
      </BtnsWrapper>
    </Section>
  );
};

export default ModalApproveAction;
