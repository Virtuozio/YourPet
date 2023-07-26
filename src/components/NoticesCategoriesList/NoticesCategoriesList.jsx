import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotices } from 'redux/notices/noticesOperations';

import { selectNotices } from 'redux/notices/noticesSelectors';
const NoticesCategoriesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);
  const notices = useSelector(selectNotices);
  console.log(notices);

  return (
    <>
      <NoticeCategoryItem noticesListInfo={notices}></NoticeCategoryItem>
    </>
  );
};

export default NoticesCategoriesList;
