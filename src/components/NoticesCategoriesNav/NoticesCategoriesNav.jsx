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
 
  const dispatch = useDispatch();
  
  const handleFilterChange = async (filter) => {
    dispatch(getNoticesByCategory(filter));
    };


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
