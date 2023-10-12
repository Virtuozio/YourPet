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

    margin-left: auto;
    margin-right: auto;

    gap: 32px;
    max-width: 1280px;
  }
`;

export const Text = styled.p`
  color: var(--primary-text-color);
  font-weight: 700;
  font-size: 24px;
  margin: 40px auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
