import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Btn = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: inherit;

  position: relative;

  padding: 8px 16px;

  color: var(--btn-bg-color);
  font-weight: 500;

  background: var(--labels-bg-color);
  border: none;
  border-radius: 40px;

  transition: color var(--duration) var(--cubic),
    background var(--duration) var(--cubic);

  &:hover,
  &:focus {
    color: var(--label-active-color);
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  padding: 0;
  list-style: none;
  margin: 0;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;

export { Btn, List };
