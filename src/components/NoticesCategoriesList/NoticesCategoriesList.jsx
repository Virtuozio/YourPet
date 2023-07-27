import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { NoticeList } from './NoticesCategoriesList.styled';

import {
  selectIsFavoriteNotices,
  selectNotices,
} from 'redux/notices/noticesSelectors';
import {
  // toast,
  Toaster,
} from 'react-hot-toast';

const NoticesCategoriesList = () => {
  const notices = useSelector(selectNotices);
  // console.log(notices);
  const favnotices = useSelector(selectIsFavoriteNotices);
  console.log('fav', favnotices);
  return (
    <>
      <NoticeList>
        {notices.length !== 0 &&
          notices.map(item => (
            <NoticeCategoryItem
              item
              key={item._id}
              notice={item}
              // mobile={12}
              // tablet={6}
              // desktop={3}
            ></NoticeCategoryItem>
          ))}

        <Toaster />
      </NoticeList>
    </>
  );
};

export default NoticesCategoriesList;
