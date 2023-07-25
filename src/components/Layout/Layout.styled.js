import styled from 'styled-components';

export const LayoutContainer = styled.div`
  box-sizing: border-box;
  min-width: 320px;
  margin: 0 auto;

  padding: 20px 20px 0;

  position: relative;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding: 24px 32px 0;
  }
  @media screen and (min-width: 1200px) {
    min-width: 1280px;
    padding: 20px 16px 0;
  }
`;
