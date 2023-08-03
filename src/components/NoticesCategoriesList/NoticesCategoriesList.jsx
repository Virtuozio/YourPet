import React from 'react';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import {
  // selectIsLoading,
  selectNotices,
} from 'redux/notices/noticesSelectors';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { NoticeList, Text } from './NoticesCategoriesList.styled';
// import Loader from 'components/Loader/Loader';

const NoticesCategoriesList = () => {
  const notices = useSelector(selectNotices);
  // const isLoading = useSelector(selectIsLoading)

  return (
    <>
      {/* {isLoading && <Loader />} */}
      {
        // !isLoading &&
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
      }
    </>
  );
};

export default NoticesCategoriesList;
