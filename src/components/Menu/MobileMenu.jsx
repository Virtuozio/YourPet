import { Link } from 'react-router-dom';
import AuthNav from 'components/AuthNav/AuthNav';
import Nav from 'components/Nav/Nav';
import icon from '../UserNav/user.png';
import { NavContainer, MenuNavBtn, Middle, User } from './Menu.styled';

export const MobileMenu = ({ isLoggedIn, user }) => {
  return (
    <Middle>
      {isLoggedIn ? (
        <MenuNavBtn user="true">
          <Link to="/user">
            <img src={icon} alt="icon" />
          </Link>
          <User>{user.name}</User>
        </MenuNavBtn>
      ) : (
        <MenuNavBtn>
          <AuthNav />
        </MenuNavBtn>
      )}
      <NavContainer>
        <Nav />
      </NavContainer>
    </Middle>
  );
};
