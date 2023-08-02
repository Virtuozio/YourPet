import AddPetButton from 'components/AddPetButton/AddPetButton';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import React from 'react';

// import ModalUnauthorized from 'components/ModalUnauthorized/ModalUnauthorized';
// import Backdrop from 'components/Backdrop/Backdrop';

import { Title, Wrapper, Container, Filters } from './Notices.styled';
// import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  fetchFavoriteNotices,
  fetchNotices,
} from 'redux/notices/noticesOperations';

import { selectTotalNotices } from 'redux/notices/noticesSelectors';

import Pagination from '@mui/material/Pagination';

// import { makeStyles } from "@material-ui/core/styles";

import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import {
  Toaster,
  // toast
} from 'react-hot-toast';
import { useParams } from 'react-router';
import { statusFilters } from '../../redux/notices/constans';
import {
  getNoticesByCategory,
  getAllOwnNotices,
  getFavNoticesbyCategory,
} from 'redux/notices/noticesOperations';
import ModalUnauthorized from 'components/ModalUnauthorized/ModalUnauthorized';

// import { selectUser } from 'redux/auth/authSelectors';
// import toast from 'react-hot-toast';

// import ModalNotice from 'components/ModalNotice/ModalNotice';
const Notices = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const totalNotices = useSelector(selectTotalNotices);
  const { categoryName } = useParams();
  // const currentUser = useSelector(selectUser);

  const [page, setPage] = useState(1);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryName !== statusFilters.FAVORITE_ADS && isLoggedIn) {
      dispatch(fetchFavoriteNotices());
    }
    if (categoryName === statusFilters.FAVORITE_ADS) {
      dispatch(getFavNoticesbyCategory(`?page=${page}`));
      // setPage(1);
    } else if (categoryName === statusFilters.MY_ADS) {
      dispatch(getAllOwnNotices());
    } else if (categoryName === statusFilters.SELL) {
      dispatch(getNoticesByCategory(`?category=${categoryName}&page=${page}`));
    } else if (
      categoryName === statusFilters.IN_GOOD_HANDS ||
      categoryName === statusFilters.LOST_FOUND
    ) {
      dispatch(getNoticesByCategory(`?category=${categoryName}`));
      setPage(1);
    }
    // else if (totalNotices === 0) {
    //   toast.error('You have to be loggedIn')
    //   console.log(totalNotices);
    // }
    else {
      dispatch(fetchNotices(`?page=${page}&limit=8`));
    }
  }, [categoryName, dispatch, page, isLoggedIn]);

  const handleChange = (e, p) => {
    setPage(p);
    // dispatch(fetchFavoriteNotices());
  };

  return (
    <>
      <Wrapper>
        <Title>Find your favorite pet</Title>
        <NoticesSearch />
        <Filters>
          <NoticesCategoriesNav />
          <Container>
            <NoticesFilters />
            {isLoggedIn ? (
              <AddPetButton text="Add pet" path="/add-pet" />
            ) : (
              <AddPetButton
                text="Add pet"
                onClick={
                  () => {
                    handleOpen(true);
                  }
                  // toast.error('You have to be loggedIn')
                }
              />
            )}
            {open && (
              <ModalUnauthorized open={open} handleClose={handleClose} />
            )}
          </Container>
        </Filters>
        <NoticesCategoriesList />

        {totalNotices > 8 && (
          <Pagination
            count={Math.ceil(totalNotices / 8)}
            size="large"
            variant="outlined"
            color="primary"
            showFirstButton
            showLastButton
            // siblingCount={1}
            // boundaryCount={0}
            onChange={handleChange}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '100px',
            }}
          />
        )}

        {/* <ModalNotice /> */}
        <Toaster />
      </Wrapper>
    </>
  );
};

export default Notices;
