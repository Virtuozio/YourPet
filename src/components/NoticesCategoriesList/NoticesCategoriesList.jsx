import React from 'react';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { selectNotices } from 'redux/notices/noticesSelectors';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { NoticeList, Text } from './NoticesCategoriesList.styled';


const NoticesCategoriesList = () => {

  const notices = useSelector(selectNotices);


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
      
    </>
  );
};

export default NoticesCategoriesList;
