import { styled } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

export const ArrowDown = styled(IoIosArrowDown).withConfig({
  shouldForwardProp: prop => prop !== 'isOpen',
})`
  font-size: 20px;
  fill: var(--btn-bg-color);

  transform: ${({ isOpen }) => (isOpen ? 'rotateX(180deg)' : '')};
`;
