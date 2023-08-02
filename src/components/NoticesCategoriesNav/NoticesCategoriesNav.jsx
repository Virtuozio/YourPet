import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { filters } from './filtersData';

import { Btn, List } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = ({ onFilterChange }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleFilterChange = (option) => {
    onFilterChange(option);
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
        <Btn to={`/notices/${path}`} onClick={() => handleFilterChange(filter)}>{filter}</Btn>
      </li>
    );
  });

  return <List>{items}</List>;
};

export default NoticesCategoriesNav;
