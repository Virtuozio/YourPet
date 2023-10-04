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
    flex-basis: 393px;
    padding-top: 0;
  }
`;

export const Title = styled.h1`
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
    top: 25vh;
    width: 701px;
    font-size: 88px;

    font-weight: 800;
    line-height: 1.3;
  }
`;

export const HomeBackgr = styled.div`
  position: relative;
  left: -20px;

  width: calc(100% + 40px);
  height: calc(100vh - 200px);

  background-image: url(${mobileBg1x});
  background-size: cover;

  background-repeat: no-repeat;
  background-position-x: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobileBg2x});
    background-repeat: no-repeat;
    background-position-x: center;
  }

  @media screen and (min-width: 420px) {
    background-image: url(${mobileBg2x});
    background-repeat: no-repeat;
    background-position-x: center;
  }

  @media screen and (min-width: 550px) {
    height: calc(100vh - 156px);
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
  @media screen and (min-width: 1200px) {
    width: calc(100% + 48px);
  }
  @media screen and (min-width: 1280px) {
    position: relative;
    z-index: -1;

    width: 100%;
    height: calc(100vh - 63px);
    left: auto;

    background: url(${desktopBg1x});
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: right;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      width: 100%;
      height: calc(100vh - 55px);

      background: url(${desktopBg2x});
      /* background-size: 100% 100vh; */
      background-size: contain;
      background-repeat: no-repeat;
      background-position-x: center;
      /* background-position-y: -55px; */
    }
  }
`;

export const NavBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

// NavBurger.classList.add('active')`
// transform: translateX(0%);
// `;

export const Link = styled.a`
  text-decoration: none;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.28px;
  color: var(--secondary-bg-color);
  @media screen and (min-width: 768px) {
    font-size: 48px;
    letter-spacing: 1.92px;
  }
`;
