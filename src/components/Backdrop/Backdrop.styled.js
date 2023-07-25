import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
  z-index: 10;
`;

export const Modal = styled.div`
  position: relative;
  opacity: 1;
  transition: opacity 0.3s;
  z-index: 12;
  padding: 44px 12px 16px 12px;
  border-radius: 20px;
  background: #fff;
  @media screen and (min-width: 768px) {
    padding: 32px 31px 24px 32px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  margin: 0;
  padding: 0;
  outline: transparent;
  background-color: transparent;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
    fill: #54adff;
  }
  &:hover {
    svg {
      transform: scale(0.8);
      fill: #ffc107;
    }
  }
`;
