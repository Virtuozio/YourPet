import styled from 'styled-components';

import { CiFilter } from 'react-icons/ci';

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 40px;
  height: 40px;
  padding: 9px 8px 7px;
  color: #54adff;
  font-weight: 700;

  background: #cce4fb;
  border: none;
  border-radius: 50%;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fef9f9;
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    min-width: 152px;

    background: transparent;
    border-width: 2px;
    border-color: #54adff;
    border-style: solid;
    border-radius: 40px;

    font-size: 16px;
  }
`;

const FilterIcon = styled(CiFilter)`
  fill: #54adff;
  width: 24px;
  height: 24px;
  stroke-width: 0.5;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: #fef9f9;
  }
`;

export { Btn, FilterIcon };
