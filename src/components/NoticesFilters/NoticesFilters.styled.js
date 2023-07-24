import styled from 'styled-components';

const Btn = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 40px;
  height: 40px;
  padding: 9px 8px 7px;
  color: #54adff;

  background-color: #cce4fb;
  border: none;
  border-radius: 50%;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fef9f9;
    background-color: transparent;
  }

  &::before {
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

  & svg {
    stroke: #54adff;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg,
  &:focus svg {
    stroke: #fef9f9;
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    min-width: 152px;

    background-color: transparent;
    border-width: 2px;
    border-color: #54adff;
    border-style: solid;
    border-radius: 40px;

    font-size: 16px;
  }
`;
export { Btn };
