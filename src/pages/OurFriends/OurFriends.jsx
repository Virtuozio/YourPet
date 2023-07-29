import React, { useEffect } from 'react';

import OurFriendsList from 'components/OurFriendsList/OurFriendsList';
import { useDispatch } from 'react-redux';
import { getFriends } from 'redux/friends/friendsOperations';

const OurFriends = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);
  return (
    <>
      <OurFriendsList />
    </>
  );
};

export default OurFriends;
