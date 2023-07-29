import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FriendsList } from './OurFriendsList.styled';
import OurFriendsCard from 'components/OurFriendsCard/OurFriendsCard';

const OurFriendsList = () => {
  const [shelterData, setShelterData] = useState(null);

  useEffect(() => {
    fetch('https://yourpets.onrender.com/api/friends')
      .then(response => response.json())
      .then(data => setShelterData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log(shelterData);

  return (
    <>
      <FriendsList>
        {shelterData ? (
          shelterData.map((friendData, index) => (
            <li>
              <OurFriendsCard key={index} friendData={friendData} />
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </FriendsList>
    </>
  );
};

export default OurFriendsList;
