import AddPetButton from 'components/AddPetButton/AddPetButton';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Title, Wrapper, Container, Filters } from './Notices.styled';
import { useEffect } from 'react';
import { fetchNotices } from 'redux/notices/noticesOperations';
// import ModalNotice from 'components/ModalNotice/ModalNotice';
const Notices = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);
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
