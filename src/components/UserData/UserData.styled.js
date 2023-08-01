import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PetsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px;
`;

const UserCardContainer = styled.div`
  position: relative;
  padding: 16px;
  border-radius: 40px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 1200px) {
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
    fill: var(--btn-bg-color);
  }
  &:hover {
    svg {
      fill: var(--header-items-color);
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

const AddPetButton = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  color: #ffffff;
  font-weight: 600;

  width: 129px;
  padding: 8px 20px;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  background: var(--btn-bg-color);
  border: none;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px #88c6fd30;

  transition: background var(--duration) var(--cubic);

  &:hover,
  &:focus {
    background: var(--hover-btn-bg-color);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export {
  UserCardContainer,
  EditBtn,
  Title,
  MainContainer,
  PetsContainer,
  AddPetButton,
};
