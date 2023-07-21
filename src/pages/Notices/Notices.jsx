import AddPetButton from 'components/AddPetButton/AddPetButton';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import React from 'react';

import { Title, Wrapper, Container, Filters } from './Notices.styled';

const Notices = () => {
  return (
    <Wrapper>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <Filters>
        <NoticesCategoriesNav />
        <Container>
          <NoticesFilters />
          <AddPetButton
          text="Add pet"/>
        </Container>
      </Filters>
      <NoticesCategoriesList />
    </Wrapper>
  );
};

export default Notices;
