import React from 'react';
import {
  // HiHeart,
  // HiOutlineHeart,
  // HiOutlineLocationMarker,
  HiOutlineClock,
  // HiClock,
} from 'react-icons/hi';

// import { GiFemale, GiMale } from "react-icons/gi";
import testImage from '../../assets/testdog.png';
import {
  DateItem,
  Female,
  FilterStatus,
  Heart,
  HeartIcon,
  ImageContainer,
  Location,
  LocationItem,
  Male,
  NoticeList,
  PetImage,
  SexItem,
  LoadMoreBtn,
  NoticeText,
  NoticeItem,
  // PetInfo,
} from './NoticeCategoryItem.styled';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const NoticeCategoryItem = ({ noticesListInfo }) => {
  // const { name, type, date, location } = noticesListInfo
  console.log(noticesListInfo);
  return (
    <NoticeList>
      <ThemeProvider
        theme={createTheme({
          breakpoints: {
            values: {
              mobile: 0,
              tablet: 768,
              desktop: 1280,
            },
          },
        })}
      >
        <Grid container spacing={{ mobile: 1, tablet: 2, desktop: 2 }}>
          {noticesListInfo !== undefined &&
            noticesListInfo.map(item => (
              <NoticeItem
                item
                key={item._id}
                mobile={12}
                tablet={6}
                desktop={3}
              >
                {/* <PaperItem sx={{ width: '280px', height: '456px' }}> */}
                <ImageContainer>
                  <PetImage src={testImage} alt="test dog photo" />
                  <HeartIcon>
                    <Heart />
                  </HeartIcon>
                  {/* <div><HiHeart /></div> */}
                  <FilterStatus>In good hands</FilterStatus>

                  {/* <PetInfo> */}
                  <LocationItem>
                    {' '}
                    <Location />
                    {item.location}
                  </LocationItem>
                  <DateItem>
                    <HiOutlineClock /> {item.date}
                  </DateItem>
                  <SexItem>
                    {item.sex === 'female' ? <Female /> : <Male />} {item.sex}
                  </SexItem>
                  {/* </PetInfo> */}
                </ImageContainer>

                {/* <h3>{item.name}</h3>
          <p>{item.type}</p> */}
                <NoticeText>Cute {item.type} looking fro a home</NoticeText>
                <LoadMoreBtn type="button">Learn more</LoadMoreBtn>
                {/* <LoadMoreBtn type='button' variant="outlined">Learn more</LoadMoreBtn> */}
                {/* </PaperItem> */}
              </NoticeItem>
            ))}
        </Grid>
      </ThemeProvider>
    </NoticeList>
  );
};

export default NoticeCategoryItem;
