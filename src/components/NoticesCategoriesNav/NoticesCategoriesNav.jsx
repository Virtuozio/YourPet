import React from 'react';
import { filters } from "./filtersData";

import { Btn, List } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  const items = filters.map(({ filter, path }, el) => {
    return (
      <li key={el}>
        <Btn>{filter}</Btn>
      </li>
    );
  });

  return <List>{ items}</List>;
};

export default NoticesCategoriesNav;
