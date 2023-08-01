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
