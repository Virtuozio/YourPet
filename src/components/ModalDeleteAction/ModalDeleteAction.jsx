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
  ModalBox
} from './ModalDeleteAction.styled';

const ModalDeleteAction = ({ closeModal, approveAction, petName }) => {

  return (
    <div>
        <Modal open={deleteModal} onClick={deleteModalClose}>
          <ModalBox>
            <Section>
              <Header>Delete adverstiment?</Header>
              <DeleteText>
                Are you sure you want to delete <strong>{petName}</strong>?
                You can`t undo this action.
              </DeleteText>
              <BtnWrapper>
                <BtnCancel type="button" onClick={deleteModalClose}>
                  Cancel
                </BtnCancel>
                <BtnYes type="button" onClick={approveAction}>
                  Yes
                  <TrashIcon />
                </BtnYes>
              </BtnWrapper>
            </Section>
          </ModalBox>
        </Modal>
      </div>
  );
};

export default ModalDeleteAction;


//  <Section>
//       <Header>Delete adverstiment?</Header>
//       <DeleteText>
//         Are you sure you want to delete <strong>{petName}</strong>? You can`t
//         undo this action.
//       </DeleteText>
//       <BtnWrapper>
//         <BtnCancel type="button" onClick={closeModal}>
//           Cancel
//         </BtnCancel>
//         <BtnYes type="button" onClick={approveAction}>
//           Yes
//           <TrashIcon />
//         </BtnYes>
//       </BtnWrapper>
//     </Section>