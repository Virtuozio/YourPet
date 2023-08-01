import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { NoticeList } from './NoticesCategoriesList.styled';

import { statusFilters } from '../../redux/notices/constans';

import {
  selectNotices,
  // selectStatusFilter
} from 'redux/notices/noticesSelectors';
import { Toaster } from 'react-hot-toast';
import { selectUser } from 'redux/auth/authSelectors';
import { selectFavoriteNotices } from 'redux/notices/noticesSelectors';


const getVisibeNotices = (notices, statusFilter, currentUser, favNotices) => {
    
  switch (statusFilter) {
    case statusFilters.SELL:
      return notices.filter(notice =>
        notice.category.toLowerCase().includes(statusFilter.toLowerCase())
      );
    case statusFilters.LOST_FOUND:
      return notices.filter(notice =>
        notice.category.toLowerCase().includes(statusFilter.toLowerCase())
      );
    case statusFilters.IN_GOOD_HANDS:
      return notices.filter(notice =>
        notice.category.toLowerCase().includes(statusFilter.toLowerCase())
      );
    case statusFilters.FAVORITE_ADS:
      return notices
      // notices.filter(notice =>
      // {
      //   let index = 0
        // for (let index = 0; index < currentUser.favorites.length; index++) {
        // notice._id === currentUser.favorites[0]._id);
        // index += 1;
          
        // }
        // }
        // notice._id === currentUser.favorites[0]._id);
      //  notice._id ===  favNotices._id
        // console.log(notice._id)
      
      // );
    case statusFilters.MY_ADS:
      return notices.filter(notice =>
        notice.owner === currentUser._id);
    default:
      return notices;
  }
};

const NoticesCategoriesList = () => {
  const notices = useSelector(selectNotices);
  const currentUser = useSelector(selectUser);
  const { categoryName } = useParams();
  const favNotices = useSelector(selectFavoriteNotices);

  const visibleNotices = getVisibeNotices(notices, categoryName, currentUser, favNotices);

  // const visibleNotices = useSelector(selectVisibleNotices);
  // console.log(visibleNotices);
  // const statusFilter = useSelector(getStatusFilter);
  console.log(visibleNotices);
  // console.log(visibleNotices);

  // useEffect(() => {
  // if (categoryName === statusFilters.SELL) {
  //   dispatch(getAllFavoriteNotices());
  // } else if (categoryName === Categories.MY_ADS) {
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

  //   setFilterId([]);

  return (
    <>
      <NoticeList>
        {visibleNotices.map(item => (
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
