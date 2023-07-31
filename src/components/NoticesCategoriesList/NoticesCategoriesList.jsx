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
// import { filters } from "../NoticesCategoriesNav/filtersData";

// import { selectVisibleNotices } from 'redux/notices/noticesSelectors';

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
  // const [filterId, setFilterId] = useState([]);
  // const visibleNotices = useSelector(selectVisibleNotices);
    // console.log(visibleNotices);
    // const statusFilter = useSelector(getStatusFilter);
  
  
  const visibleNotices = getVisibeNotices(notices, categoryName);
  // console.log(visibleNotices);

    // useEffect(() => {
    // if (categoryName === statusFilters.SELL) {
    //   dispatch(fetchFavoriteNotices());
    // } else if (categoryName === statusFilters.MY_ADS) {
    //   dispatch(getAllOwnNotices());
    // } else {
    //   dispatch(getNoticesByCategory(categoryName));
    // }

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

  // }, [categoryName]);



  return (
    <>
      <NoticeList>
        {
          // notices
          //     .filter(
          //       item =>
                  
          //         (categoryName === statusFilters.FAVORITE_ADS ||
          //           categoryName === statusFilters.MY_ADS ||
          //           categoryName === item.category)
          //     )
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
