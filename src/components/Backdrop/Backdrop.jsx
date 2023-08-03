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

  const onModalOpen = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <Overlay onClick={onModalOpen}>
      <Modal>
        <CloseBtn type="button" onClick={closeModal}>
          <LiaTimesSolid />
        </CloseBtn>
        {children}
      </Modal>
    </Overlay>
  );
};

export default Backdrop;
