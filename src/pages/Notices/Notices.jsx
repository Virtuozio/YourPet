import AddPetButton from 'components/AddPetButton/AddPetButton';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import React from 'react';

import { Title, Wrapper, Container, Filters } from './Notices.styled';
// import ModalNotice from 'components/ModalNotice/ModalNotice';

const Notices = () => {
  return (
    <Wrapper>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <Filters>
        <NoticesCategoriesNav />
        <Container>
          <NoticesFilters />
          <AddPetButton text="Add pet" path="/add-pet" />
        </Container>
      </Filters>
      <NoticesCategoriesList />
      {/* <ModalNotice /> */}
    </Wrapper>
  );
};

export default Notices;
