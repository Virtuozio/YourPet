import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectNotices } from 'redux/notices/noticesSelectors';
const NoticesCategoriesList = () => {
  const notices = useSelector(selectNotices);

  return (
    <>
      <NoticeCategoryItem noticesListInfo={notices}></NoticeCategoryItem>
    </>
  );
};

export default NoticesCategoriesList;
