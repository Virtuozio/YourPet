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

  color: #888888;

  background-color: #fff;
  border-radius: 24px;
  border: none;
  outline: none;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    box-shadow: 7px 13px 14px 0px rgba(116, 177, 232, 0.24);
  }

  &::placeholder {
    font-size: 14px;
    font-style: 'Inter-Regular', sans-serif;
  }
`;

const SubmitBtn = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'query',
})`
  top: 10px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  transform: ${({ query }) => query && 'translateX(-27px)'};

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const SearchIco = styled(CiSearch)`
  color: #54adff;
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

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  // & svg {
  //   stroke: #ffc107;
  // }
`;

const CrossSmall = styled(RxCross1)`
  color: #ffc107;
  width: 24px;
  height: 24px;
`;

export { Form, Input, SubmitBtn, ClearBtn, SearchIco, CrossSmall };
