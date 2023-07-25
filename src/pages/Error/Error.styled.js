import styled from 'styled-components';


import mobileBg1x from '../../assets/images/errorpage/backgr-home-page.png';
import mobileBg2x from '../../assets/images/errorpage/backgr-home-page2x.png';
import tabletBg1x from '../../assets/images/errorpage/backgr-home-page-tablet.png';
import tabletBg2x from '../../assets/images/errorpage/backgr-home-page-tablet2x.png';
import desktopBg1x from '../../assets/images/errorpage/backgr-home-page-desktop.png';
import desktopBg2x from '../../assets/images/errorpage/backgr-home-page-desktop2x.png';

export const Container = styled.div`
/* width: 1280px; */

a{
  margin: 0 auto;
}

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 16px;


  }
`;



export const Text = styled.p`
  width: 100%;
  margin: 0;
  margin-top: 60px;
  font-family: Manrope-Bold;
  font-size: 24px;
  text-align: center;
  line-height: normal;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;


export const Button = styled.a`
  width: 248px;
  height: auto;
  padding: 8px 28px;
  margin: 0 auto;
  margin-top: 18px;
  margin-bottom: 16px;
  border: none;
  border-radius: 40px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;

  color: #fff;
  cursor: pointer;
  background: rgba(84, 173, 255, 1);
  translate: 0 0;

  ::before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;
    z-index: -1;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  :hover {
    /* background: linear-gradient(
      245deg,
      rgba(65, 158, 241, 1) 30%,
      rgba(155, 208, 255, 1)
    ); */
    background: red;
    background-position: 100% 50%;
  }


`;






export const ErrorBackgr = styled.div`
  position: relative;
  max-width: 280px;
  height: 123px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 60px;

  background-image: url(${mobileBg1x});
  background-size: cover;

  background-repeat: no-repeat;
  background-position-x: center;
  /* background-position-y: -30px; */

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobileBg2x});
    background-repeat: no-repeat;
    background-position-x: center;
    /* background-position-y: -30px; */
  }

  @media screen and (min-width: 420px) {
    

    background-image: url(${mobileBg2x});
    background-repeat: no-repeat;
    background-position-x: center;
    /* background-position-y: -60px; */
  }

  @media screen and (min-width: 768px) {
    /* width: calc(100% + 64px); */
    max-width: 704px;
    height: 308px;
    margin-top: 80px;
    margin-bottom: 70px;



    background: url(${tabletBg1x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    /* background-position-y: -80px; */

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabletBg2x});
      background-size: cover;
      background-repeat: no-repeat;
      background-position-x: center;
      /* background-position-y: -80px; */
    }
  }

  @media screen and (min-width: 1280px) {
    max-width: 822px;
    height: 360px;
    margin-top: 80px;
    margin-bottom: 18px;


    background: url(${desktopBg1x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    /* background-position-y: -90px; */
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    width: 100%;

    background: url(${desktopBg2x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    /* background-position-y: -90px; */
  }
`;

