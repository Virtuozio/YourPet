import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

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

export const StyledLink = styled(NavLink)`
  color: #111;
  font-family: inherit;
  font-size: 32px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.28px;
  text-decoration: none;
  transition: color linear ease-in-out;

  &.active {
    color: #ffc107;
  }

  &:hover {
    color: #ffc107;
  }
`;
