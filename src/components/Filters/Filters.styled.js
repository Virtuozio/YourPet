const { styled } = require('styled-components');

export const FilterWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  width: 152px;

  padding: 8px;
  background-color: #ffffff;

  border-radius: 20px;
  z-index: 10;
`;

export const TitleFilters = styled.h2`
  margin-bottom: 8px;

  text-align: left;

  font-family: var(--main-font);
  font-weight: 700;

  font-size: 16px;
  color: var(--btn-bg-color);
  user-select: none;
`;

export const ListFilterGeneralTypes = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const GeneralItemFilterType = styled.li`
  width: 100%;
`;

export const FilterTypeWrapper = styled.div`
  font-family: var(--secondary-font);
  font-weight: 400;
  line-height: 1.3;
  background-color: var(--labels-bg-color);

  border-radius: 20px;
  overflow: hidden;
`;

export const OpenListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 14px;

  cursor: pointer;
`;

export const TitleFilterType = styled.h3`
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  color: var(--btn-bg-color);
  user-select: none;
`;

export const ListFilterTypes = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;

  margin-top: -7px;
  padding-bottom: 7px;
`;

export const ItemFilterType = styled.li`
  width: 100%;
`;

export const LabelcheckBox = styled.label`
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;

  padding: 7px 14px;

  gap: 16px;
  cursor: pointer;
`;

export const InputcheckBox = styled.input`
  display: none;
`;

export const FilterNameOfType = styled.p`
  font-size: 14px;
  color: var(--btn-bg-color);
  user-select: none;
`;
