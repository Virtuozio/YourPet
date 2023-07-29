import styled from 'styled-components';

export const DetailsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;

  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-bottom: 40px;
  }
`;

export const DetailsItem = styled.li`
  position: relative;
`;
