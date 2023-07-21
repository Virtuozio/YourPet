import { useState } from 'react';

function useModal(state) {
  const [showModal, setShowModal] = useState(state);
  const toggleModal = () => setShowModal(prevState => !prevState);

  return { toggleModal, showModal };
}

export default useModal;
