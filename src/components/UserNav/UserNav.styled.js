import styled from 'styled-components';

export const User = styled.a`
  @media screen and (min-width: 768px) {
    color: #ffc107;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.64px;
    margin-left: 12px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Container = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
