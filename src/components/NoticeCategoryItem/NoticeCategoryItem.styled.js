// import styled from 'styled-components';
import styled from '@emotion/styled'
import { HiHeart, HiOutlineHeart, HiOutlineLocationMarker, HiOutlineClock, HiClock} from "react-icons/hi";
import { GiFemale, GiMale } from "react-icons/gi";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
// import { styled } from '@mui/material/styles';



export const NoticeList = styled.ul`

display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`

export const NoticeItem = styled(Grid)`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    /* flex-wrap: wrap; */
    margin-bottom: 24px;
    margin-right: auto;
    margin-left: auto;

    width: 280px;
    height: 456px;
    background-color: #fff;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);;
    

    /* :not(:last-of-type) {
        margin-bottom: 20px;
        
    } */

    @media screen and (min-width: 768px) {
  
        width: 336px;
    /* margin-right: 32px;
    margin-left: 32px; */
  
            }

@media screen and (min-width: 1280px) {
  
    width: 288px;
    /* margin-right: 15px;
    margin-left: 15px; */
    /* margin-right: auto;
    margin-left: auto; */
}

`

export const PaperItem = styled(Paper)`
    width: 280px;
    height: 456px;
      border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);;
`


export const ImageContainer = styled.div`
position: relative;
width: 280px;
height: 288px;

@media screen and (min-width: 768px) {
  
        width: 336px;
    /* margin-right: 32px;
    margin-left: 32px; */
  
            }

@media screen and (min-width: 1280px) {
  
    width: 288px;
    /* margin-right: 15px;
    margin-left: 15px; */
    /* margin-right: auto;
    margin-left: auto; */
}
`

export const PetImage = styled.img`
width: 280px;
height: 288px;

@media screen and (min-width: 768px) {
  
        width: 336px;
    /* margin-right: 32px;
    margin-left: 32px; */
  
            }

@media screen and (min-width: 1280px) {
  
    width: 288px;
    /* margin-right: 15px;
    margin-left: 15px; */
    /* margin-right: auto;
    margin-left: auto; */
}

`

// export const PetInfo = styled.div`
// display: flex;
// align-items: center;
//   justify-content: center;
//   padding-left: 24px;
//   padding-right: 24px;
// `

export const HeartIcon = styled.div`
display: flex;
align-items: center;
  justify-content: center;
position: absolute;
    top: 12px;
    right: 12px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
background-color: #C5DFF6;
`

export const Heart = styled(HiOutlineHeart)`
width: 24px;
height: 24px;
color: #54ADFF;
`

export const FilterStatus = styled.div`
width: 126px;
height: 32px;


display: flex;
align-items: center;
justify-content: center;

position: absolute;
top: 16px;
left: 0;



background-color: #CCE4FB;
border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`

export const LocationItem = styled.div`
display: flex;
align-items: center;
  /* justify-content: center; */
position: absolute;
    left: 8px;
    bottom: 12px;

    width: 80px;
    height: 28px;
    background-color: #CCE4FB;
    border-radius: 16px;

    


    
     white-space: nowrap; /* Текст не переносится */
    overflow: hidden; /* Обрезаем всё за пределами блока */
    text-overflow: ellipsis; /* Добавляем многоточие */

    @media screen and (min-width: 768px)  and (max-width: 1279px){
  
    
    left: 24px;
    

  
            }
   
`

export const Location = styled(HiOutlineLocationMarker)`
width: 24px;
height: 24px;
color: #54ADFF;
margin-left: 9px;
/* margin-right: 8px; */
`

export const DateItem = styled.div`
display: flex;
align-items: center;
  /* justify-content: center; */
position: absolute;
    left: 100px;
    bottom: 12px;

    width: 80px;
    height: 28px;
    background-color: #CCE4FB;
    border-radius: 16px;

     white-space: nowrap; /* Текст не переносится */
    overflow: hidden; /* Обрезаем всё за пределами блока */
    text-overflow: ellipsis; /* Добавляем многоточие */

    @media screen and (min-width: 768px)  and (max-width: 1279px){
  
    
    left: 128px;
   

  
            }
   
`

export const Date = styled(HiOutlineClock)`
width: 24px;
height: 24px;
color: #54ADFF;
margin-left: 9px;
/* margin-right: 8px; */

`

export const SexItem = styled.div`
display: flex;
align-items: center;
  /* justify-content: center; */
position: absolute;
    left: 192px;
    bottom: 12px;

    width: 80px;
    height: 28px;
    background-color: #CCE4FB;
    border-radius: 16px;

    @media screen and (min-width: 768px)  and (max-width: 1279px){
  
    
    left: 232px;
    

  
            }
`

export const Female = styled(GiFemale)`
width: 24px;
height: 24px;
color: #54ADFF;
margin-left: 9px;
/* margin-right: 8px; */
`

export const Male = styled(GiMale)`
width: 24px;
height: 24px;
color: #54ADFF;
margin-left: 9px;
/* margin-right: 8px; */
`

export const LoadMoreBtn = styled.button`
background-color: white;
width: 248px;
height: 38px;
outline: none;
border-width: 2px;
border-color: #54ADFF;
border-style: solid;
border-radius: 40px;
color: #54ADFF;
cursor: pointer;

font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.64px;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);


    &:hover {
        color: #fff;
    background: linear-gradient(315deg, #419EF1 0%, #9BD0FF 100%);
    }


/* border: none; */
`

// linear-gradient(315deg, #419EF1 0%, #9BD0FF 100%);

export const NoticeText = styled.p`
font-size: 24px;
width: 231px;
font-style: normal;
font-weight: 700;
line-height: normal;
`