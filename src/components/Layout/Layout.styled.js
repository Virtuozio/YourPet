import styled from 'styled-components';
import BackgrImg from '../../assets/bg.png';
import BackgrBigImg from '../../assets/bg2x.png';

export const LayoutContainer = styled.div`
  box-sizing: border-box;
  min-width: 320px;
  margin: 0 auto;

  padding: 20px 20px 0;

  position: relative;

  background-image: url(${BackgrImg});
  background-color: #fef9f9;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding: 24px 32px 0;

    background-image: url(${BackgrBigImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media screen and (min-width: 1280) {
    min-width: 1280px;
    padding: 20px 16px 0;
  }
`;
