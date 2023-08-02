import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import {
  addToFavorite,
  removeFromFavorite,
  deleteNotice,
  fetchFavoriteNotices,
} from 'redux/notices/noticesOperations';
import { selectFavoriteNotices } from 'redux/notices/noticesSelectors';

import Modal from '@mui/material/Modal';
import {toast} from 'react-hot-toast';
import { Pawprint } from 'utils/icons';
import { LiaHeart } from 'react-icons/lia';

import { petAgeCount, modalDateFormat } from 'utils/petAgeCount';

import testImage from '../../assets/testdog.png';

import { selectUser } from 'redux/auth/authSelectors';

import {
  DateItem,
  Female,
  FilterStatus,
  Heart,
  HeartIcon,
  ImageContainer,
  Location,
  LocationItem,
  Male,
  PetImage,
  SexItem,
  LoadMoreBtn,
  NoticeText,
  HeartFill,
  NoticesCategoryItemStyled,
  AgeCount,
  ModalCloseBtn,
  ModalCloseBtnIcon,
  ModalBox,
  ModalTitle,
  ModalText,
  BtnLogIn,
  BtnRegister,
  BtnsWrapper,
  PawStyled,
  RemoveNoticeBtn,
  RemoveIcon,
} from './NoticeCategoryItem.styled';

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
  AddButton,
  RemoveButton,
  CategoryItem,
  PhotoContainer,
} from '../ModalNotice/ModalNotice.styled';

import {
  Section,
  Header,
  BtnCancel,
  BtnYes,
  BtnWrapper,
  TrashIcon,
  DeleteText,
} from '../ModalDeleteAction/ModalDeleteAction.styled';

const NoticeCategoryItem = ({ notice }) => {
  const [favorite, setFavorite] = useState(false);

  const currentUser = useSelector(selectUser);

  const favNotices = useSelector(selectFavoriteNotices);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    const newFunc = favNotices => {
      favNotices.forEach(favNotice => {
        if (favNotice._id === notice._id) {
          setFavorite(true);
        }
      });
    };
    if (isLoggedIn) newFunc(favNotices);
  }, [favNotices, notice._id, isLoggedIn]);

  const toggleFavoriteMethod = async () => {
    try {
      if (isLoggedIn && !favorite) {
        dispatch(addToFavorite(notice._id));
        setFavorite(true);
        toast.success('added to your favorites');
      } else if (isLoggedIn && favorite) {
        dispatch(removeFromFavorite(notice._id));
        setFavorite(false);
        toast.success('removed from favorites');
      }   else { 
        toast.error('You have to be loggedIn');
        dispatch(fetchFavoriteNotices());
    }    
      
    } catch (e) {
      toast.error('You have to be loggedIn');
    }
  };

  const handleRemoveOwnNotice = async () => {
    if (isLoggedIn && currentUser._id === notice.owner) {
      dispatch(deleteNotice(notice._id));
      toast.success('removed your own notice');
    } else {
      toast.error('You have to be loggedIn');
    }
  };

  const locationSlice = location => {
    if (location.length > 4) {
      return location.slice(0, 3) + '...';
    }
    return location;
  };

  const nameFormat = name => {
    if (name.length > 15) {
      return name.slice(0, 15) + '...';
    }
    return name;
  };

  const categoryFilter = category => {
    if (category === 'for-free') return 'in good hands';
    else return category;
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [deleteModal, setDeleteModal] = React.useState(false);
  const deleteModalOpen = () => setDeleteModal(true);
  const deleteModalClose = () => setDeleteModal(false);

  return (
    <NoticesCategoryItemStyled>
      <ImageContainer>
        <PetImage
          src={notice.fileURL ? notice.fileURL : testImage}
          alt="test dog photo"
        />
        <HeartIcon type="button" onClick={toggleFavoriteMethod}>
          {favorite ? <HeartFill /> : <Heart />}
        </HeartIcon>

        {currentUser._id === notice.owner && (
          <RemoveNoticeBtn type="button" onClick={deleteModalOpen}>
            <RemoveIcon />
          </RemoveNoticeBtn>
        )}

        <FilterStatus>{categoryFilter(notice.category)}</FilterStatus>

        <LocationItem>
          <Location />
          {locationSlice(notice.location)}
        </LocationItem>
        <DateItem>
          <AgeCount /> {petAgeCount(notice.date)}
        </DateItem>
        <SexItem>
          {notice.sex === 'female' ? <Female /> : <Male />} {notice.sex}
        </SexItem>
      </ImageContainer>
      <NoticeText>{nameFormat(notice.title)}</NoticeText>
      <LoadMoreBtn type="button" onClick={handleOpen}>
        Learn more <PawStyled />
      </LoadMoreBtn>

      {!isLoggedIn ? (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalBox>
              <ModalCloseBtn>
                <ModalCloseBtnIcon onClick={handleClose} />
              </ModalCloseBtn>

              <ModalTitle id="modal-modal-title" variant="h6" component="h2">
                Attention
              </ModalTitle>
              <ModalText id="modal-modal-description">
                We would like to remind you that certain functionality is
                available only to authorized users.If you have an account,
                please log in with your credentials. If you do not already have
                an account, you must register to access these features.
              </ModalText>

              <BtnsWrapper>
                <BtnLogIn to="/login">
                  Log IN
                  <Pawprint />
                </BtnLogIn>
                <BtnRegister to="/register">Register</BtnRegister>
              </BtnsWrapper>
            </ModalBox>
          </Modal>
        </div>
      ) : (
        <div>
          <Modal open={open} onClick={handleClose}>
            <ModalBox>
              <Wrapper>
                <ModalCloseBtn>
                  <ModalCloseBtnIcon onClick={handleClose} />
                </ModalCloseBtn>
                <PhotoContainer>
                  <PetPhoto src={notice.fileURL} />
                  <CategoryItem>{categoryFilter(notice.category)}</CategoryItem>
                </PhotoContainer>
                <div>
                  <Title>Сute dog looking for a home</Title>
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
        </div>
      )}

      <div>
        {/* <ModalDeleteAction approveAction={handleRemoveOwnNotice} petName={notice.name} /> */}
        <Modal open={deleteModal} onClick={deleteModalClose}>
          <ModalBox>
            <Section>
              <Header>Delete adverstiment?</Header>
              <DeleteText>
                Are you sure you want to delete <strong>{notice.name}</strong>?
                You can`t undo this action.
              </DeleteText>
              <BtnWrapper>
                <BtnCancel type="button" onClick={deleteModalClose}>
                  Cancel
                </BtnCancel>
                <BtnYes type="button" onClick={handleRemoveOwnNotice}>
                  Yes
                  <TrashIcon />
                </BtnYes>
              </BtnWrapper>
            </Section>
          </ModalBox>
        </Modal>
      </div>
    
    </NoticesCategoryItemStyled>
  );
};

export default NoticeCategoryItem;
