import React, { useEffect } from 'react';

import OurFriendsList from 'components/OurFriendsList/OurFriendsList';
import { useDispatch } from 'react-redux';
import { getFriends } from 'redux/friends/friendsOperations';
import { Title } from 'pages/OurFriends/OurFriends.styled';

const OurFriends = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);
  return (
    <>
      <Title>Our Friends</Title>

      <OurFriendsList />
    </>
  );
};

export default OurFriends;
