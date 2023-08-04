import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { Toaster } from 'react-hot-toast';

import AddPetButton from 'components/AddPetButton/AddPetButton';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';

import ModalUnauthorized from 'components/ModalUnauthorized/ModalUnauthorized';

import { Title, Wrapper, Container, Filters } from './Notices.styled';
import {
  // selectFavoriteNotices,
  selectTotalNotices,
} from 'redux/notices/noticesSelectors';
import Pagination from '@mui/material/Pagination';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {
  getNoticesByCategory,
  getAllOwnNotices,
  getFavNoticesbyCategory,
  fetchAllFavNotices,
} from 'redux/notices/noticesOperations';
import { animateScroll as scroll } from 'react-scroll';

import Loader from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/notices/noticesSelectors';

const Notices = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const { categoryName } = useParams();

  const totalPages = useSelector(selectTotalNotices);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = option => {
    // При зміні фільтрації, змінює сторінку пагінації на 1
    setCurrentPage(1);
    scroll.scrollToTop();
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    scroll.scrollToTop();
    // код для отримання нових даних, використання фільтрів тощо
  };

  useEffect(() => {
    if (isLoggedIn) dispatch(fetchAllFavNotices());
    if (categoryName !== 'favorite' && categoryName !== 'my-pets') {
      if (categoryName === 'lost-found' || categoryName === 'for-free') {
      }
      dispatch(
        getNoticesByCategory(`?category=${categoryName}&page=${currentPage}`)
      );
    } else if (categoryName === 'favorite' && isLoggedIn) {
      dispatch(getFavNoticesbyCategory(`?page=${currentPage}`));
    } else if (categoryName === 'my-pets' && isLoggedIn) {
      dispatch(getAllOwnNotices(`?page=${currentPage}`));
    }
  }, [categoryName, dispatch, isLoggedIn, currentPage]);
  //

  return (
    <>
      {isLoading && <Loader />}

      <Wrapper>
        <Title>Find your favorite pet</Title>
        <NoticesSearch />
        <Filters>
          <NoticesCategoriesNav onFilterChange={handleFilterChange} />
          <Container>
            <NoticesFilters />
            {isLoggedIn ? (
              <AddPetButton text="Add pet" path="/add-pet" />
            ) : (
              <AddPetButton text="Add pet" onClick={handleOpen} />
            )}
            {open && (
              <ModalUnauthorized open={open} handleClose={handleClose} />
            )}
          </Container>
        </Filters>
        <NoticesCategoriesList />

        <Toaster />

        {totalPages > 8 && (
          <Pagination
            count={Math.ceil(totalPages / 8)}
            size="large"
            variant="outlined"
            color="primary"
            showFirstButton
            showLastButton
            // count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '100px',
            }}
          />
        )}
      </Wrapper>
    </>
  );
};

export default Notices;
