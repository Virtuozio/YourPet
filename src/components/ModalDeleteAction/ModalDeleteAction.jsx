import React from 'react';
import Modal from '@mui/material/Modal';

import {
  Section,
  Header,
  BtnCancel,
  BtnYes,
  BtnWrapper,
  TrashIcon,
  DeleteText,
  ModalBox,
} from './ModalDeleteAction.styled';

const ModalDeleteAction = ({
  deleteModal,
  deleteModalClose,
  notice,
  handleRemoveOwnNotice,
}) => {
  return (
    <Modal open={deleteModal} onClick={deleteModalClose}>
      <ModalBox>
        <Section>
          <Header>Delete adverstiment?</Header>
          <DeleteText>
            Are you sure you want to delete <strong>{notice.name}</strong>? You
            can`t undo this action.
          </DeleteText>
          <BtnWrapper>
            <BtnCancel type="button" onClick={() => deleteModalClose}>
              Cancel
            </BtnCancel>
            <BtnYes type="button" onClick={handleRemoveOwnNotice}>
              Yes
              <TrashIcon />
            </BtnYes>
          </BtnWrapper>
        </Section>
      </ModalBox>
    </Modal>
  );
};

export default ModalDeleteAction;
