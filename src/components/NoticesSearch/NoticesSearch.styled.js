import styled from 'styled-components';

import { RxCross1 } from 'react-icons/rx';
import { CiSearch } from 'react-icons/ci';

const Form = styled.form`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    width: 608px;
    margin-top: 40px;
  }
`;

const Input = styled.input`
  width: 100%;
  max-height: 44px;

  padding-top: 14px;
  padding-bottom: 13px;
  padding-left: 20px;

  color: var(--text-input-color);

  background-color: #fff;
  border-radius: 24px;
  border: none;
  outline: none;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  transition: box-shadow var(--duration) var(--cubic);

  &:focus,
  &:hover {
    box-shadow: 7px 13px 14px 0px rgba(116, 177, 232, 0.24);
  }

  &::placeholder {
    font-size: 14px;
    font-style: var(--secondary-font);
  }
`;

const SubmitBtn = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'query',
})`
  position: absolute;
  top: 10px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  transform: ${({ query }) => query && 'translateX(-27px)'};

  transition: transform var(--duration) var(--cubic);
`;

const SearchIco = styled(CiSearch)`
  color: var(--btn-bg-color);
  width: 24px;
  height: 24px;
  stroke-width: 0.35;
`;

const ClearBtn = styled(SubmitBtn).withConfig({
  shouldForwardProp: prop => prop !== 'query',
})`
  right: 13px;

  transform: translateX(0);
  opacity: ${({ query }) => (query ? 1 : 0)};

  transition: opacity var(--duration) var(--cubic);
`;

const CrossSmall = styled(RxCross1)`
  color: var(--header-items-color);
  width: 24px;
  height: 24px;
`;

export { Form, Input, SubmitBtn, ClearBtn, SearchIco, CrossSmall };
