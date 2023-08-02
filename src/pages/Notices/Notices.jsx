import React, { useState } from 'react';
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

const Notices = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   if (categoryName !== statusFilters.FAVORITE_ADS && isLoggedIn) {
  //     dispatch(fetchFavoriteNotices());
  //   }
  //   if (categoryName === statusFilters.FAVORITE_ADS) {
  //     dispatch(getFavNoticesbyCategory(`?page=${page}`));
  //   } else if (categoryName === statusFilters.MY_ADS) {
  //     dispatch(getAllOwnNotices());
  //   } else if (categoryName === statusFilters.SELL) {
  //     dispatch(getNoticesByCategory(`?category=${categoryName}&page=${page}`));
  //   } else if (
  //     categoryName === statusFilters.IN_GOOD_HANDS ||
  //     categoryName === statusFilters.LOST_FOUND
  //   ) {
  //     dispatch(getNoticesByCategory(`?category=${categoryName}`));
  //     setPage(1);
  //   } else {
  //     dispatch(fetchNotices(`?page=${page}&limit=8`));
  //   }
  // }, [categoryName, dispatch, page, isLoggedIn]);

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
              <AddPetButton text="Add pet" onClick={handleOpen} />
            )}
            {open && (
              <ModalUnauthorized open={open} handleClose={handleClose} />
            )}
          </Container>
        </Filters>
        <NoticesCategoriesList />

        <Toaster />
      </Wrapper>
    </>
  );
};

export default Notices;
