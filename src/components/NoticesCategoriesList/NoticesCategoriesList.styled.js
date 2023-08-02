import styled from 'styled-components';

export const NoticeList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  margin-top: 24px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }
`;

export const Text = styled.p`
  color: #111111;
  font-weight: 500;
  font-size: 16px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
