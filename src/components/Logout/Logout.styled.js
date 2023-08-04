import styled from 'styled-components';

export const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-color: transparent;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
  color: #888888;
  background-color: transparent;
  cursor: pointer;
  transition: color var(--duration) var(--cubic);
  svg {
    width: 24px;
    height: 24px;
    fill: #54adff;
    transform: rotateX(180deg);
  }
  &:hover,
  &:focus {
    color: #ffc107;
    svg {
      fill: #ffc107;
    }
  }
`;
