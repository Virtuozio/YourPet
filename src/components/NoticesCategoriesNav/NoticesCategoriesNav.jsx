import React from 'react';
import {
  useSelector,
} from 'react-redux';
import { filters } from './filtersData';

import { Btn, List } from './NoticesCategoriesNav.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const items = filters.map(({ filter, path }, el) => {
    if (!isLoggedIn && filter === 'favorite ads') {
      return null;
    }

    if (!isLoggedIn && filter === 'my ads') {
      return null;
    }

    return (
      <li key={el}>
        <Btn
          to={`/notices/${path}`}
        >
          {filter}
        </Btn>
      </li>
    );
  });

  return <List>{items}</List>;
};

export default NoticesCategoriesNav;
