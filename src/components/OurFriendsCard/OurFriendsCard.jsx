import React from 'react';
// import { useSelector } from 'react-redux';
import { Container, Company, ContentBox, Logo } from './OurFriendsCard.styled';
import OurFriendsInfo from 'components/OurFriendsInfo/OurFriendsInfo';
import KharkivShelter from '../../assets/KharkivShelter.png';

const shortenCompanyName = name => {
  return name
    .replace('Харківський міський притулок для тварин', 'Харківський притулок')
    .replace("Притулок для бездомних тварин 'Сіріус'", 'Сіріус')
    .replace('Притулок для собак Велике серце', 'Велике серце')
    .replace('Волонтерська організація БАРБОС', 'БАРБОС')
    .replace('Ветеринарний центр LicoVet', 'LICO')
    .trim();
};

const OurFriendsCard = ({ friendData }) => {
  const shortenedTitle = shortenCompanyName(friendData.title);

  return (
    <>
      <Container>
        <Company href={friendData.url} target="_blank">
          {shortenedTitle}
        </Company>
        <ContentBox>
          <Logo
            src={friendData.imageUrl ? friendData.imageUrl : KharkivShelter}
            alt={friendData.title}
            width="100"
            height="68"
          ></Logo>
          <OurFriendsInfo {...friendData} />
        </ContentBox>
      </Container>
    </>
  );
};

export default OurFriendsCard;
