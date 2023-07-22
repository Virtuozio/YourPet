import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Btn = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: inherit;

  position: relative;

  padding: 8px 16px;

  color: #54adff;

  background-color: #cce4fb;
  border: none;
  border-radius: 40px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  //   &.active {
  //     color: #fef9f9;
  //     background-color: #54adff;
  //   }

  &::before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 0;

    z-index: -1;

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &:hover,
  &:focus {
    color: #fef9f9;
    background-color: transparent;
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
