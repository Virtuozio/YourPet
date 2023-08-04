import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import {
  addToFavorite,
  removeFromFavorite,
  deleteNotice,
  removeFromFavoriteCategory,
} from 'redux/notices/noticesOperations';
import { selectFavoriteNotices } from 'redux/notices/noticesSelectors';
import { toast } from 'react-hot-toast';

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
  PawStyled,
  RemoveNoticeBtn,
  RemoveIcon,
} from './NoticeCategoryItem.styled';

import ModalUnauthorized from 'components/ModalUnauthorized/ModalUnauthorized';
import ModalDeleteAction from 'components/ModalDeleteAction/ModalDeleteAction';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import { animateScroll as scroll } from 'react-scroll';
import { useParams } from 'react-router';

const NoticeCategoryItem = ({ notice }) => {
  const [favorite, setFavorite] = useState(false);

  const { categoryName } = useParams();
  const currentUser = useSelector(selectUser);
  const favNotices = useSelector(selectFavoriteNotices);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const [openPetInfo, setOpenPetInfo] = React.useState(false);
  const PetInfoOpen = () => setOpenPetInfo(true);
  const PetInfoClose = () => setOpenPetInfo(false);

  const [deleteModal, setDeleteModal] = React.useState(false);
  const deleteModalOpen = () => setDeleteModal(true);
  const deleteModalClose = () => setDeleteModal(false);

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
      } else if (isLoggedIn && favorite && categoryName !== 'favorite') {
        dispatch(removeFromFavorite(notice._id));
        setFavorite(false);

        toast.success('removed from favorites');
      } else if (categoryName === 'favorite') {
        dispatch(removeFromFavoriteCategory(notice._id));
        setFavorite(false);
        scroll.scrollToTop();
      } else {
        setOpen(true);
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
    if (category === 'lost-found') return 'lost/found';
    else return category;
  };

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

        {currentUser.email === notice.ownerEmail && (
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
      <LoadMoreBtn type="button" onClick={PetInfoOpen}>
        Learn more <PawStyled />
      </LoadMoreBtn>

      {!isLoggedIn && (
        <div>
          <ModalUnauthorized open={open} handleClose={handleClose} />
        </div>
      )}

      {openPetInfo && (
        <div>
          <ModalNotice
            openPetInfo={openPetInfo}
            PetInfoClose={PetInfoClose}
            notice={notice}
            categoryFilter={categoryFilter}
            modalDateFormat={modalDateFormat}
            favorite={favorite}
            toggleFavoriteMethod={toggleFavoriteMethod}
          />
        </div>
      )}

      <div>
        <ModalDeleteAction
          deleteModal={deleteModal}
          deleteModalClose={deleteModalClose}
          notice={notice}
          handleRemoveOwnNotice={handleRemoveOwnNotice}
        />
      </div>
    </NoticesCategoryItemStyled>
  );
};

export default NoticeCategoryItem;
