import React from 'react';
import { LiaHeart } from 'react-icons/lia';
import {
  ModalBox,
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
  ModalCloseBtn,
  ModalCloseBtnIcon,
  CategoryItem,
  PhotoContainer,
  AddButton,
  RemoveButton
  
} from './ModalNotice.styled';

import Modal from '@mui/material/Modal';

const ModalNotice = ({openPetInfo, PetInfoClose, notice, categoryFilter, modalDateFormat, favorite, toggleFavoriteMethod}) => {
  return (
    <>
      <Modal open={openPetInfo} onClose={PetInfoClose}>
            <ModalBox>
              <Wrapper>
                <ModalCloseBtn>
                  <ModalCloseBtnIcon onClick={PetInfoClose} />
                </ModalCloseBtn>
                <PhotoContainer>
                  <PetPhoto src={notice.fileURL} />
                  <CategoryItem>{categoryFilter(notice.category)}</CategoryItem>
                </PhotoContainer>
                <div>
                  <Title>{notice.title}</Title>
                  <Info>
                    <Tag>Name:</Tag>
                    <Tag value="true">{notice.name}</Tag>
                    <Tag>Birthday:</Tag>
                    <Tag value="true">{modalDateFormat(notice.date)}</Tag>
                    <Tag>Type:</Tag>
                    <Tag value="true">{notice.type}</Tag>
                    <Tag>Place:</Tag>
                    <Tag value="true">{notice.location}</Tag>
                    <Tag>The sex:</Tag>
                    <Tag value="true">{notice.sex}</Tag>
                    <Tag>Email:</Tag>
                    <StyledLink to="mailto:user@mail.com" privat="true">
                      {notice.ownerEmail}
                    </StyledLink>
                    <Tag>Phone:</Tag>
                    <StyledLink to="tel:+380971234567" privat="true">
                      {notice.ownerPhone}
                    </StyledLink>
                  </Info>
                </div>
              </Wrapper>
              <Comment>
                <Text>
                  <Bold>Comments:</Bold>
                  {notice.comments}
                </Text>
              </Comment>
              <Container>
                <Button primary="true" type="button">
                  <StyledLink to="tel:+380971234567">
                    <p primary="true">Contact</p>
                  </StyledLink>
                </Button>

                {!favorite ? (
                  <AddButton type="button" onClick={toggleFavoriteMethod}>
                    <p>Add to</p>
                    <LiaHeart />
                  </AddButton>
                ) : (
                  <RemoveButton type="button" onClick={toggleFavoriteMethod}>
                    <p>Remove from</p>
                    <LiaHeart />
                  </RemoveButton>
                )}
              </Container>
            </ModalBox>
          </Modal>
    </>
  );
};

export default ModalNotice;
