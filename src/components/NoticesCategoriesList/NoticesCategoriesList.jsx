import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import React from 'react';
import { useParams } from 'react-router';
import { useSelector,  useDispatch} from 'react-redux';
import { NoticeList } from './NoticesCategoriesList.styled';
import { useEffect, useState } from 'react';
import { selectNotices, selectStatusFilter } from 'redux/notices/noticesSelectors';
import { statusFilters } from "../../redux/notices/constans";
import {
  Toaster,
} from 'react-hot-toast';

import { getNoticesByCategory, fetchFavoriteNotices, getAllOwnNotices } from 'redux/notices/noticesOperations';


const getVisibeNotices = (notices, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.SELL:
      return notices.filter(notice => notice.category.toLowerCase().includes(statusFilter.toLowerCase()));
    case statusFilters.LOST_FOUND:
      return notices.filter(notice => notice.category.toLowerCase().includes(statusFilter.toLowerCase()));
    case statusFilters.IN_GOOD_HANDS:
      return notices.filter(notice => notice.category.toLowerCase().includes(statusFilter.toLowerCase()));
    case statusFilters.FAVORITE_ADS:
      return notices.filter(notice => notice.category.toLowerCase().includes(statusFilter.toLowerCase()));
    case statusFilters.MY_ADS:
      return notices.filter(notice => notice.category.toLowerCase().includes(statusFilter.toLowerCase()));
    default:
      return notices;
  }
};

const NoticesCategoriesList = () => {
  const notices = useSelector(selectNotices);
  const { categoryName } = useParams(); 
 const dispatch = useDispatch();
  
  
  const visibleNotices = getVisibeNotices(notices, categoryName);




  return (
    <>
      <NoticeList>
        {
          
          visibleNotices.map(item => (
            <NoticeCategoryItem
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
