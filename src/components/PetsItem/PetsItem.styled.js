import styled from 'styled-components';

const PetCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: calc(100% - 48px);
  padding: 16px 20px 40px 20px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    padding: 20px 20px 77px 20px;

    flex-direction: row;
    align-items: flex-start;
  }

  @media screen and (min-width: 1200px) {
    padding: 20px 28px 31px 20px;
  }
`;

const PetImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  background-color: #54adff;

  @media screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
  }
  @media screen and (min-width: 1200px) {
    width: 161px;
    height: 161px;
  }
`;
const PetInfo = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.56px;
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.64px;
  }
`;

const DeleteBtn = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  outline: transparent;
  background-color: transparent;
  cursor: pointer;
  float: right;
  svg {
    width: 24px;
    height: 24px;
    fill: var(--btn-bg-color);
  }
  &:hover {
    svg {
      fill: var(--header-items-color);
    }
  }
`;

const InfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  // @media screen and (min-width: 768px) {
  //   width: 515px;
  // }
  // @media screen and (min-width: 1200px) {
  //   width: 580px;
  // }
`;

export { PetCard, PetImage, PetInfo, DeleteBtn, InfoContainer };
