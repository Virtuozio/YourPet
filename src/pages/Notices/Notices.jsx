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
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router';
import { statusFilters } from '../../redux/notices/constans';
import {
  getNoticesByCategory,
  getAllOwnNotices,
} from 'redux/notices/noticesOperations';
// import ModalNotice from 'components/ModalNotice/ModalNotice';
const Notices = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const totalNotices = useSelector(selectTotalNotices);
  const { categoryName } = useParams();

  // console.log(totalNotices);
  // const [isModalOpen, setIsModalOpen] = useState(true); //поміняти значення на false*true//

  // const closeModal = () => {
  //   setIsModalOpen(prevState => !prevState);
  // };
  // const pageSize = 4;
  const [page, setPage] = useState(1);

  // const pageCount = Math(totalNotices / page)

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) dispatch(fetchFavoriteNotices());
  }, [dispatch, page, isLoggedIn]);

  useEffect(() => {
    dispatch(fetchFavoriteNotices());
    if (categoryName === statusFilters.FAVORITE_ADS) {
      //
    } else if (categoryName === statusFilters.MY_ADS) {
      dispatch(getAllOwnNotices());
    } else if (categoryName === statusFilters.SELL) {
      // setPage(1);
      dispatch(getNoticesByCategory(`?category=${categoryName}&page=${page}`));
      // setPage(1);
    } else if (
      categoryName === statusFilters.IN_GOOD_HANDS ||
      categoryName === statusFilters.LOST_FOUND
    ) {
      // if (totalNotices < 8 ) {
      //   dispatch(getNoticesByCategory(`?category=${categoryName}`));
      // } else {
      dispatch(getNoticesByCategory(`?category=${categoryName}`));
      // }
      setPage(1);
    } else {
      // setPage(1);
      dispatch(fetchNotices(`?page=${page}&limit=8`));
    }

    // if (isLoggedIn) {
    //   const getFavorites = async () => {
    //   const res = await getAllFavoriteNoticesWithoutR();
    //   if (res?.result) setFavorites(res.result);
    //   setIsFavorites(true);
    // };

    // const getOwn = async () => {
    //   const res = await getAllOwnNoticesWithoutR();
    //   if (res?.result) setOwns(res?.result);
    //   setIsOwns(true);
    // };

    // getOwn();
    // getFavorites();
    // } else {
    //   setIsFavorites(true);
    //   setIsOwns(true);
    // }

    // setFilterId([]);
  }, [categoryName, dispatch, page]);

  const handleChange = (e, p) => {
    setPage(p);
  };

  return (
    <>
      {/* {isModalOpen && (
        <Backdrop closeModal={closeModal}>
          <ModalUnauthorized closeModal={closeModal} />
        </Backdrop>
      )} */}

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
                onClick={() => toast.error('You have to be loggedIn')}
              />
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
      </Wrapper>
    </>
  );
};

export default Notices;
