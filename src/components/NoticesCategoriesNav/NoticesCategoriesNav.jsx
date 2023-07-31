import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { filters } from "./filtersData";

import { Btn, List } from './NoticesCategoriesNav.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { statusFilters } from "../../redux/notices/constans";
import { selectStatusFilter } from "../../redux/notices/noticesSelectors";
import { setStatusFilter } from "../../redux/notices/filtersSlice";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
  getNoticesByCategory
} from 'redux/notices/noticesOperations';
// const NoticesCategoriesNav = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const items = filters.map(({ filter, path }, el) => {
//     if (!isLoggedIn && filter === 'favorite ads') {
//       return null;
//     }

//     if (!isLoggedIn && filter === 'my ads') {
//       return null;
//     }
//     return (
      
//       <li key={el}>
//         <Btn to={`/notices/${path}`}>{filter}</Btn>
//       </li>
//     );
//   });

//   return <List>{ items}</List>;
// };

const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const dispatch = useDispatch();
  // const filter = useSelector(selectStatusFilter);

  // const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  
  
const { categoryName } = useParams();
  // const handleFilterChange = async (filter) => {
  //   const response = await axios.get(`notices/users/search?category=${filter}&page=1&limit=8`);
  //   console.log(response);
  // };
  const dispatch = useDispatch();
  
  const handleFilterChange = async (filter) => {
    dispatch(getNoticesByCategory(filter));
    };

  // return (
  //   <div>
  //     <button
  //       selected={filter === statusFilters.SELL}
  //       onClick={() => handleFilterChange(statusFilters.SELL)}
  //     >
  //       sell
  //     </button>
  //     <button
  //       selected={filter === statusFilters.LOST_FOUND}
  //       onClick={() => handleFilterChange(statusFilters.LOST_FOUND)}
  //     >
  //       lost/found
  //     </button>
  //     <button
  //       selected={filter === statusFilters.IN_GOOD_HANDS}
  //       onClick={() => handleFilterChange(statusFilters.IN_GOOD_HANDS)}
  //     >
  //       in good hands
  //     </button>

  //     {isLoggedIn &&
  //       <>
  //       <button
  //       selected={filter === statusFilters.FAVORITE_ADS}
  //       onClick={() => handleFilterChange(statusFilters.FAVORITE_ADS)}>
  //       favorite ads
  //     </button>
        
  //     <button
  //       selected={filter === statusFilters.MY_ADS}
  //       onClick={() => handleFilterChange(statusFilters.MY_ADS)}
  //     >
  //       my ads
  //       </button>
  //     </>}
  //   </div>
  // );

  const items = filters.map(({ filter, path }, el) => {
    if (!isLoggedIn && filter === 'favorite ads') {
      return null;
    }

    if (!isLoggedIn && filter === 'my ads') {
      return null;
    }
    return (
      
      <li key={el}>
        <Btn to={`/notices/${path}`}onClick={()=>dispatch(getNoticesByCategory(filter))}>{filter}</Btn>
      </li>
    );
  });

  return <List>{ items}</List>;
};

export default NoticesCategoriesNav;
