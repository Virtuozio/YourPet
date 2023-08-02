import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #111;
  font-family: inherit;
  font-size: 32px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.28px;
  text-decoration: none;
  transition: color var(--duration) var(--cubic);

  &.active {
    color: var(--header-items-color);
  }

  &:hover {
    color: var(--header-items-color);
  }
`;
