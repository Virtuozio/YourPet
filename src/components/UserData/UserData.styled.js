import styled from 'styled-components';

const PetsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: calc(100% - 129px);
  @media screen and (min-width: 1200px) {
    width: calc(821px - 129px);
  }
`;

const UserCardContainer = styled.div`
  position: relative;
  padding: 16px;
  border-radius: 40px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1200px) {
    width: 395px;
    height: max-content;
  }
`;

const EditBtn = styled.button`
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
      fill: #ffc107;
    }
  }
  @media screen and (min-width: 768px) {
    right: 18px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  color: #000000;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

const MainContainer = styled.section`
max-width; 100vw;
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  gap: 46px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export { UserCardContainer, EditBtn, Title, MainContainer, PetsContainer };
