import styled from 'styled-components';

export const PetsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media screen and(min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  color: #000000;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
