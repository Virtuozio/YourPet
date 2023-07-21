import styled from '@emotion/styled';

import mobileBg1x from '../../assets/images/homepage/backgr-home-page.png';
import mobileBg2x from '../../assets/images/homepage/backgr-home-page2x.png';
import tabletBg1x from '../../assets/images/homepage/backgr-home-page-tablet.png';
import tabletBg2x from '../../assets/images/homepage/backgr-home-page-tablet2x.png';
import desktopBg1x from '../../assets/images/homepage/backgr-home-page-desktop.png';
import desktopBg2x from '../../assets/images/homepage/backgr-home-page-desktop2x.png';

export const HomeWrapp = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const TitleWrapp = styled.div`
  padding-top: 60px;
  margin: 0;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    flex-basis: 501px;
    padding-top: 0;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-family: sans-serif;
  text-align: left;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.375;

  @media screen and (min-width: 768px) {
    font-size: 68px;
    line-height: 1.47;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 128px;
    width: calc(100% + 300px);
    font-weight: 800;
    line-height: 1.3;
  }
`;

export const HomeBackgr = styled.div`
  position: relative;
  left: -20px;

  width: calc(100% + 40px);
  height: 438px;

  background-image: url(${mobileBg1x});
  background-size: cover;

  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: -30px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobileBg2x});
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: -30px;
  }

  @media screen and (min-width: 420px) {
    height: 538px;

    background-image: url(${mobileBg2x});
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: -60px;
  }

  @media screen and (min-width: 550px) {
    height: 750px;
  }

  @media screen and (min-width: 768px) {
    width: calc(100% + 64px);
    height: 1000px;

    left: -32px;

    background: url(${tabletBg1x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: -80px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabletBg2x});
      background-size: cover;
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: -80px;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    max-height: 616px;
    left: auto;

    background: url(${desktopBg1x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: -90px;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    width: 100%;
    max-height: 616px;

    background: url(${desktopBg2x});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: -90px;
  }
`;
