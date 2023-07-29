import React from 'react';
// import { useSelector } from 'react-redux';
import { Container, Company, ContentBox, Logo } from './OurFriendsCard.styled';
import OurFriendsInfo from 'components/OurFriendsInfo/OurFriendsInfo';

const OurFriendsCard = ({ friendData }) => {
  return (
    <>
      <Container>
        <Company href={friendData.url}>{friendData.title}</Company>
        <ContentBox>
          {friendData.imageUrl && (
            <Logo
              src={friendData.imageUrl}
              alt={friendData.title}
              width="100"
              height="68"
            ></Logo>
          )}
          <OurFriendsInfo {...friendData} />
        </ContentBox>
      </Container>
    </>
  );
};

export default OurFriendsCard;
