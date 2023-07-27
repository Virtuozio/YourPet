import AddPetButton from 'components/AddPetButton/AddPetButton';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import React from 'react';

// import ModalUnauthorized from 'components/ModalUnauthorized/ModalUnauthorized';
// import ModalDeleteAction from 'components/ModalDeleteAction/ModalDeleteAction';
// import Backdrop from 'components/Backdrop/Backdrop';

import { Title, Wrapper, Container, Filters } from './Notices.styled';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchFavoriteNotices,
  fetchNotices,
} from 'redux/notices/noticesOperations';
// import ModalNotice from 'components/ModalNotice/ModalNotice';
const Notices = () => {
  // const [isModalOpen, setIsModalOpen] = useState(true); //поміняти значення на false*true//

  // const closeModal = () => {
  //   setIsModalOpen(prevState => !prevState);
  // };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotices());
    dispatch(fetchFavoriteNotices());
  }, [dispatch]);

  return (
    <>
      {/* {isModalOpen && (
        <Backdrop closeModal={closeModal}>
          <ModalUnauthorized closeModal={closeModal} />
        </Backdrop>
      )} */}
      {/* {isModalOpen && (
        <Backdrop closeModal={closeModal}>
          <ModalDeleteAction closeModal={closeModal} />
        </Backdrop>
      )} */}

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
    </>
  );
};

export default Notices;
