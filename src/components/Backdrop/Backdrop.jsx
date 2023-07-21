import { useEffect } from 'react';
import { Overlay, Modal, CloseBtn } from './Backdrop.styled';
import { LiaTimesSolid } from 'react-icons/lia';

export const Backdrop = ({ children, closeModal }) => {
  useEffect(() => {
    const onPessKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onPessKeyDown);

    return () => window.removeEventListener('keydown', onPessKeyDown);
  }, [closeModal]);

  const handleClose = e => {
    if (e.target.nodeName !== 'DIV') {
      return;
    }
    closeModal();
  };

  return (
    <Overlay onClick={handleClose}>
      <Modal>
        <CloseBtn type="button" onClick={handleClose}>
          <LiaTimesSolid />
        </CloseBtn>
        {children}
      </Modal>
    </Overlay>
  );
};
