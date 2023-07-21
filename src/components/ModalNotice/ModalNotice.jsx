import React from 'react';
import { LiaHeart } from 'react-icons/lia';
import {
  Wrapper,
  PetPhoto,
  Title,
  Info,
  Tag,
  Comment,
  Text,
  Bold,
  Button,
  StyledLink,
  Container,
} from './ModalNotice.styled';

const ModalNotice = () => {
  return (
    <>
      <Wrapper>
        <PetPhoto>
          <span>In good hands</span>
        </PetPhoto>
        <div>
          <Title>Сute dog looking for a home</Title>
          <Info>
            <Tag>Name:</Tag>
            <Tag value="true">Rich</Tag>
            <Tag>Birthday:</Tag>
            <Tag value="true">21.09.2020</Tag>
            <Tag>Type:</Tag>
            <Tag value="true">Pomeranian</Tag>
            <Tag>Place:</Tag>
            <Tag value="true">Lviv</Tag>
            <Tag>The sex:</Tag>
            <Tag value="true">male</Tag>
            <Tag>Email:</Tag>
            <StyledLink to="mailto:user@mail.com" privat="true">
              user@mail.com{' '}
            </StyledLink>
            <Tag>Phone:</Tag>
            <StyledLink to="tel:+380971234567" privat="true">
              +380971234567{' '}
            </StyledLink>
          </Info>
        </div>
      </Wrapper>
      <Comment>
        <Text>
          <Bold>Comments:</Bold>
          Rich would be the perfect addition to an active family that loves to
          play and go on walks. I bet he would love having a doggy playmate too!
        </Text>
      </Comment>
      <Container>
        <Button primary="true" type="button">
          <StyledLink to="tel:+380971234567">
            <p primary="true">Contact</p>
          </StyledLink>
        </Button>

        <Button type="button">
          <p>Add to</p>
          <LiaHeart />
        </Button>
      </Container>
    </>
  );
};

export default ModalNotice;
