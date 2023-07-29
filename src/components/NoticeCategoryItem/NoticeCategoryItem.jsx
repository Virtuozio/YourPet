import React from 'react';
import // HiHeart,
// HiOutlineHeart,
// HiOutlineLocationMarker,
// HiOutlineClock,
// HiClock,
'react-icons/hi';

// import { GiFemale, GiMale } from "react-icons/gi";
import testImage from '../../assets/testdog.png';
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
  // NoticeList,
  PetImage,
  SexItem,
  LoadMoreBtn,
  NoticeText,
  // NoticeItem,
  HeartFill,
  // CardDiv,
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
  // PetInfo,
} from './NoticeCategoryItem.styled';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Unstable_Grid2';

// import ModalUnauthorized from 'components/ModalUnauthorized/ModalUnauthorized';
import { useDispatch, useSelector } from 'react-redux';
import // selectNotices,
// selectFavoriteNotices,
'redux/notices/noticesSelectors';
import { useState } from 'react';
import {
  addToFavorite,
  removeFromFavorite,
} from 'redux/notices/noticesOperations';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import toast from 'react-hot-toast';
import { petAgeCount } from 'utils/petAgeCount';

import Modal from '@mui/material/Modal';
import { Pawprint } from '../../utils/icons';

// import ModalNotice from '../ModalNotice/ModalNotice'
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
} from '../ModalNotice/ModalNotice.styled';
import { selectFavoriteNotices } from 'redux/notices/noticesSelectors';
import { useEffect } from 'react';

const NoticeCategoryItem = ({ notice }) => {
  // const notices = useSelector(selectNotices);
  // const favoriteNoticesArray = useSelector(selectFavoriteNotices);
  // console.log(favoriteNoticesArray);
  // console.log(notice);
  const [favorite, setFavorite] = useState(false);

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
    newFunc(favNotices);
  }, [favNotices, notice._id]);
  // const [favoritePet, setFavoritePet] = useState(false)
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavoriteMethod = async () => {
    if (isLoggedIn && !favorite) {
      // if ( !favorite) {
      // const res = await addToFavorite(notice._id);
      // if (!res) {
      //   return toast.error("can't add notice");
      // }
      dispatch(addToFavorite(notice._id));
      setFavorite(true);
      toast.success('added to your favorites');
    } else if (isLoggedIn && favorite) {
      //  } else if ( favorite) {
      // const res = await removeFromFavorite(notice._id);
      // if (!res) {
      //   return toast.error("can't remove notice");
      // }
      dispatch(removeFromFavorite(notice._id));
      setFavorite(false);
      // categoryName === Categories.FAVORITE_ADS && getFilterId(item._id)
      toast.success('removed from favorites');
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <NoticesCategoryItemStyled>
      <ImageContainer>
        <PetImage src={testImage} alt="test dog photo" />
        <HeartIcon
          type="button"
          // onClick={() => { dispatch(toggleFavoriteMethod(notice._id)); } }>
          onClick={toggleFavoriteMethod}
        >
          {favorite ? <HeartFill /> : <Heart />}
        </HeartIcon>

        <FilterStatus>In good hands</FilterStatus>

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
      <NoticeText>Cute {notice.name} looking fro a home</NoticeText>
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
                  Rich would be the perfect addition to an active family that
                  loves to play and go on walks. I bet he would love having a
                  doggy playmate too!
                </Text>
              </Comment>
              <Container>
                <Button primary="true" type="button">
                  <StyledLink to="tel:+380971234567">
                    <p primary="true">Contact</p>
                  </StyledLink>
                </Button>

                <Button type="button" onClick={toggleFavoriteMethod}>
                  <p>Add to</p>
                  <LiaHeart />
                </Button>
              </Container>
            </ModalBox>
          </Modal>
        </div>
      )}
    </NoticesCategoryItemStyled>
  );
};

export default NoticeCategoryItem;
