import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const AuthBtn = styled(Link)`
  display: flex;
  width: 165px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 2px solid var(--header-items-color);
  background: ${props =>
    props.$login ? 'var(  --header-items-color)' : 'var(--label-active-color)'};
  text-decoration: none;

  color: ${props =>
    props.$login ? 'var(--label-active-color)' : 'var(  --header-items-color)'};
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  transition: all var(--duration) var(--cubic);

  svg {
    fill: var(--label-active-color);
  }

  &:hover {
    background: ${props =>
      props.$login
        ? 'var(--label-active-color)'
        : 'var(  --header-items-color)'};
    color: ${props =>
      props.$login
        ? 'var(  --header-items-color)'
        : 'var(--label-active-color)'};

    svg {
      fill: var(--header-items-color);
    }
  }

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`;
