import React from 'react';
import { User, Container, LogoutBtn, StyledLink } from './UserNav.styled';
import icon from '../UserNav/user.png';
import { useAuth } from 'hooks';
import { CiLogout } from 'react-icons/ci';
import useModal from 'hooks/useModal';
import Backdrop from 'components/Backdrop/Backdrop';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';

const UserNav = () => {
  const { user } = useAuth();
  const { toggleModal, showModal } = useModal(false);

  return (
    <Container>
      <StyledLink to="/user">
        <img src={icon} alt="icon" />
        <User>{user.name}</User>
      </StyledLink>
      <LogoutBtn onClick={() => toggleModal()}>
        Log Out
        <CiLogout />
      </LogoutBtn>
      {showModal && (
        <Backdrop closeModal={toggleModal}>
          <ModalApproveAction closeModal={toggleModal} />
        </Backdrop>
      )}
    </Container>
  );
};

export default UserNav;
