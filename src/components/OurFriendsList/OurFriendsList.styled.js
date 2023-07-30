import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  flex-wrap: wrap;


  gap: 20px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
  gap: 24px;
  }

  @media screen and (min-width: 1280px) {
  gap: 32px;
  }
  `