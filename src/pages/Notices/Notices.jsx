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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchFavoriteNotices,
  fetchNotices,
} from 'redux/notices/noticesOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { toast } from 'react-hot-toast';
// import ModalNotice from 'components/ModalNotice/ModalNotice';
const Notices = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const [isModalOpen, setIsModalOpen] = useState(true); //поміняти значення на false*true//

  // const closeModal = () => {
  //   setIsModalOpen(prevState => !prevState);
  // };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotices());
    if (isLoggedIn) dispatch(fetchFavoriteNotices());
  }, [dispatch, isLoggedIn]);

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
            {isLoggedIn ? (
              <AddPetButton text="Add pet" path="/add-pet" />
            ) : (
              <AddPetButton
                text="Add pet"
                onClick={() => toast.error('You have to be loggedIn')}
              />
            )}
          </Container>
        </Filters>
        <NoticesCategoriesList />
        {/* <ModalNotice /> */}
      </Wrapper>
    </>
  );
};

export default Notices;
