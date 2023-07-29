import React from 'react';
import { ContentBox } from './OurFriendsInfo.styled';

const OurFriendsInfo = ({ address, email, phone }) => {
  return (
    <>
      <ContentBox>
        <ul>
          <li>
            <a href="">
              <b>Time</b>
              <p>{}</p>
            </a>
          </li>

          <li>
            <a href="">
              <b>Address</b>
              <p>{address}</p>
            </a>
          </li>

          <li>
            <a href="">
              <b>Email</b>
              <p>{email}</p>
            </a>
          </li>

          <li>
            <a href="">
              <b>Phone</b>
              <p>{phone}</p>
            </a>
          </li>
        </ul>
      </ContentBox>
    </>
  );
};

export default OurFriendsInfo;
