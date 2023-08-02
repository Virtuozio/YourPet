import {
  Container,
  MenuItem,
  Nav,
  TextContainer,
  Text,
  ButtonAbout,
  Buttons,
} from './Footer.styled';

import { AuthBtn } from '../AuthNav/AuthNav.styled';
import { Pawprint } from '../../utils/icons';

const Footer = () => {
  return (
    <Container>
      <Nav>
        <MenuItem to="/News">News</MenuItem>
        <MenuItem to="/Notices">Find pet</MenuItem>
        <MenuItem to="/OurFriends">Our friends</MenuItem>
      </Nav>

      <TextContainer>
        <Text>Group 10</Text>
        <Text>With &#128155;</Text>
        <ButtonAbout>About the team</ButtonAbout>
      </TextContainer>

      <Buttons>
        <AuthBtn to="/login" login="true">
          Log IN
          <Pawprint />
        </AuthBtn>
        <AuthBtn to="/register">Registration</AuthBtn>
      </Buttons>
    </Container>
  );
};

export default Footer;
