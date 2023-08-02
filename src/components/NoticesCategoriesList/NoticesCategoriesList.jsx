import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { Toaster } from 'react-hot-toast';
import Pagination from '@mui/material/Pagination';

import {
  getNoticesByCategory,
  getAllOwnNotices,
  getFavNoticesbyCategory,
  fetchAllFavNotices,
} from 'redux/notices/noticesOperations';
import {
  // selectFavoriteNotices,
  selectTotalNotices,
} from 'redux/notices/noticesSelectors';
// import { statusFilters } from '../../redux/notices/constans';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
// import {
//   fetchFavoriteNotices,
//   fetchNotices,
// } from 'redux/notices/noticesOperations';

import { selectNotices } from 'redux/notices/noticesSelectors';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';

import { NoticeList, Text } from './NoticesCategoriesList.styled';
import { useState } from 'react';

const NoticesCategoriesList = () => {
  const { categoryName } = useParams();
  const notices = useSelector(selectNotices);
  // const favNotices = useSelector(selectFavoriteNotices);
  // const [currentCategory, setCurrentCategory] = useState(categoryName);

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const totalNotices = useSelector(selectTotalNotices);

  const [page, setPage] = useState(1);

  useEffect(() => {
    // setCurrentCategory(prevState => {
    //   console.log('first Category', prevState);
    //   if (prevState === undefined) {
    //     setPage(1);
    //     return categoryName;
    //   } else if (prevState !== categoryName) {
    //     console.log(prevState);
    //     console.log(categoryName);
    //     console.log(prevState !== categoryName);
    //     setPage(1);
    //   }
    //   console.log('final Category', prevState);
    // });
    dispatch(fetchAllFavNotices());
  }, [categoryName, dispatch]);

  useEffect(() => {
    if (categoryName !== 'favorite' && categoryName !== 'my-pets') {
      dispatch(getNoticesByCategory(`?category=${categoryName}&page=${page}`));
    } else if (categoryName === 'favorite' && isLoggedIn) {
      dispatch(getFavNoticesbyCategory(`?page=${page}`));
    } else if (categoryName === 'my-pets' && isLoggedIn) {
      dispatch(getAllOwnNotices());
    }
  }, [categoryName, dispatch, isLoggedIn, page]);

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

  const handleChange = (e, p) => {
    setPage(p);
  };
  return (
    <>
      <NoticeList>
        {notices.length > 0 ? (
          notices.map(item => (
            <NoticeCategoryItem
              key={item._id}
              notice={item}
            ></NoticeCategoryItem>
          ))
        ) : (
          <Text>Sorry, we can't find that</Text>
        )}

        <Toaster />
      </NoticeList>

      {totalNotices > 8 && (
        <Pagination
          count={Math.ceil(totalNotices / 8)}
          size="large"
          variant="outlined"
          color="primary"
          showFirstButton
          showLastButton
          onChange={handleChange}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '100px',
          }}
        />
      )}
    </>
  );
};

export default NoticesCategoriesList;
