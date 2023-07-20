import AddPetButton from 'components/AddPetButton/AddPetButton';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import React from 'react';

const Notices = () => {
  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesFilters />
      <AddPetButton />
      <NoticesCategoriesList />
    </>
  );
};

export default Notices;
