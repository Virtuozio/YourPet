import Logo from 'components/Logo/Logo';
import { LiaTimesSolid } from 'react-icons/lia';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
  MenuBurger,
  Top,
  CloseBurger,
  MenuBackground,
  LogoutBtn,
} from './Menu.styled';
import Nav from 'components/Nav/Nav';
import { useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';
import { CiLogout } from 'react-icons/ci';
import Backdrop from 'components/Backdrop/Backdrop';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import useModal from 'hooks/useModal';
import { useCallback, useEffect } from 'react';
import { MobileMenu } from './MobileMenu';

export const Menu = ({ size, openMenu, setOpenMenu }) => {
  const { isLoggedIn, user } = useAuth();
  const { toggleModal, showModal } = useModal(false);
  let url = useLocation();
  const closeMenu = useCallback(() => {
    setOpenMenu(false);
  }, [setOpenMenu]);

  useEffect(() => {
    closeMenu();
  }, [url, closeMenu]);

  return (
    <>
      <div>
        <MenuBurger type="button" onClick={() => setOpenMenu(true)}>
          <RxHamburgerMenu />
        </MenuBurger>
        {openMenu && (
          <MenuBackground>
            <Top>
              <Logo size={size} />
              {size[0] < 768 && (
                <CloseBurger onClick={closeMenu}>
                  <LiaTimesSolid />
                </CloseBurger>
              )}

              {size[0] >= 768 && isLoggedIn && (
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '24px' }}
                >
                  <LogoutBtn onClick={() => toggleModal()}>
                    Log Out
                    <CiLogout />
                  </LogoutBtn>
                  <CloseBurger onClick={closeMenu}>
                    <LiaTimesSolid />
                  </CloseBurger>
                </div>
              )}
            </Top>
            {size[0] < 768 ? (
              <MobileMenu isLoggedIn={isLoggedIn} user={user} />
            ) : (
              <Nav />
            )}
            {isLoggedIn && size[0] < 768 && (
              <LogoutBtn onClick={() => toggleModal()}>
                Log Out
                <CiLogout />
              </LogoutBtn>
            )}

            {size >= 768 && <Nav />}
            {showModal && (
              <Backdrop closeModal={toggleModal}>
                <ModalApproveAction closeModal={toggleModal} />
              </Backdrop>
            )}
          </MenuBackground>
        )}
      </div>
    </>
  );
};
