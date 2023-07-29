import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriends } from 'redux/friends/friendsOperations';
import { selectAllFriends } from 'redux/friends/friendsSelectors';

const OurFriends = () => {
  const friends = useSelector(selectAllFriends);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);
  console.log(friends);
  return <div>OurFriends</div>;
};

export default OurFriends;
