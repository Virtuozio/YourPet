import styled from 'styled-components';

import { FiTrash2 } from 'react-icons/fi';

const Section = styled.div`
  /* width: 256px; */
  height: 329px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    /* min-width: 545px; */
    height: 296px;
  }
`;

const Header = styled.p`
  width: 200px;
  text-align: center;

  color: var(--primary-text-color);
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

const DeleteText = styled.p`
  color: var(--primary-text-color);
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 44px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 48px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 17px;
  }
`;

const BtnCancel = styled.button`
  width: 256px;
  height: 40px;
  cursor: pointer;
  padding: 9px 0px;

  background: transparent;
  border-width: 2px;
  border-color: var(--btn-bg-color);
  border-style: solid;
  border-radius: 40px;
  font-size: 16px;

  color: var(--btn-bg-color);
  font-size: 16px;
  font-weight: 700;

  transition: background var(--duration) var(--cubic),
    color var(--duration) var(--cubic);

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: var(--label-active-color);
  }

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

const BtnYes = styled.button`
  width: 256px;
  height: 40px;
  cursor: pointer;
  padding: 9px 0px;

  background: var(--btn-bg-color);
  border: none;
  border-radius: 40px;
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: var(--label-active-color);
  font-size: 16px;
  font-weight: 700;

  transition: background var(--duration) var(--cubic);

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

const TrashIcon = styled(FiTrash2)`
  width: 24px;
  height: 24px;
  color: var(--label-active-color);
`;

export {
  Section,
  Header,
  TrashIcon,
  BtnWrapper,
  BtnCancel,
  BtnYes,
  DeleteText,
};
