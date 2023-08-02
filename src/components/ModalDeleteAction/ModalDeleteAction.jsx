import React from 'react';

import {
  Section,
  Header,
  BtnCancel,
  BtnYes,
  BtnWrapper,
  TrashIcon,
  DeleteText,
} from './ModalDeleteAction.styled';

const ModalDeleteAction = ({ closeModal, approveAction, petName }) => {
  return (
    <Section>
      <Header>Delete adverstiment?</Header>
      <DeleteText>
        Are you sure you want to delete <strong>{petName}</strong>? You can`t
        undo this action.
      </DeleteText>
      <BtnWrapper>
        <BtnCancel type="button" onClick={closeModal}>
          Cancel
        </BtnCancel>
        <BtnYes type="button" onClick={approveAction}>
          Yes
          <TrashIcon />
        </BtnYes>
      </BtnWrapper>
    </Section>
  );
};

export default ModalDeleteAction;
