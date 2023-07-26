import styled from '@emotion/styled';

export const Menu = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
    display: flex;
    margin-left: 160px;
  }
`;

export const Link = styled.a`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.8px;
    text-decoration: none;
    color: #111111;
  }
`;
