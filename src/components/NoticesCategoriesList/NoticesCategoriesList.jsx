import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { NoticeList, Text } from './NoticesCategoriesList.styled';

import { selectNotices } from 'redux/notices/noticesSelectors';
import { Toaster } from 'react-hot-toast';
import { selectFavoriteNotices } from 'redux/notices/noticesSelectors';

const NoticesCategoriesList = () => {
  const notices = useSelector(selectNotices);
  const favNotices = useSelector(selectFavoriteNotices);
  console.log('facNotices :>> ', favNotices);
  return (
    <>
      <NoticeList>
        {notices.length > 0 ? (
          notices.map(item => (
            <NoticeCategoryItem
              key={item._id}
              notice={item}
              isFavorite={favNotices.includes(item._id)}
              // mobile={12}
              // tablet={6}
              // desktop={3}
            ></NoticeCategoryItem>
          ))
        ) : (
          <Text>Sorry, we can't find that</Text>
        )}

        <Toaster />
      </NoticeList>
    </>
  );
};

export default NoticesCategoriesList;
