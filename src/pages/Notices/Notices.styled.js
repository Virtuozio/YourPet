import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-family: Manrope-Bold;
  font-size: 24px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

const Filters = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    gap: 80px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;

    width: 100%;
  }
`;

export { Wrapper, Title, Container, Filters };
