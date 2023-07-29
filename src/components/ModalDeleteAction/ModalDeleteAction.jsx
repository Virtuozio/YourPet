import React from 'react';

import {
  Section,
  Header,
  BtnCancel,
  BtnYes,
  BtnsWrapper,
  TrashIcon,
  Text,
} from './ModalDeleteAction.styled';

const ModalDeleteAction = ({ closeModal, approveAction }) => {
  return (
    <Section>
      <Header>Delete adverstiment?</Header>
      <Text>
        Are you sure you want to delete <strong>PetName</strong>? You can`t undo
        this action.
      </Text>
      <BtnsWrapper>
        <BtnCancel type="button" onClick={closeModal}>
          Cancel
        </BtnCancel>
        <BtnYes type="button" onClick={approveAction}>
          Yes
          <TrashIcon />
        </BtnYes>
      </BtnsWrapper>
    </Section>
  );
};

export default ModalDeleteAction;
