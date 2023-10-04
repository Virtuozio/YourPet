import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectStatusFilters } from 'redux/notices/noticesSelectors';
import { setFilters } from 'redux/notices/noticesSlice';

import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from 'react-icons/md';

import {
  OpenListWrapper,
  FilterNameOfType,
  FilterTypeWrapper,
  InputcheckBox,
  ItemFilterType,
  LabelcheckBox,
  ListFilterTypes,
  TitleFilterType,
} from 'components/Filters/Filters.styled';
import { ArrowDown } from './FiltersByAge.styled';

const FiltersByAge = ({ setFiltersState }) => {
  const [isOpenList, setisOpenList] = useState(false);
  const filters = useSelector(selectStatusFilters);

  const [checksBoxValue, setChecksBoxValue] = useState(filters);

  const dispatch = useDispatch();

  const onGeneralListFilterClick = e => {
    setisOpenList(!isOpenList);
  };

  const handleChackBoxChange = e => {
    const { name } = e.target;
    const newValue = !checksBoxValue[name];
    let result = '';

    const ageValues = {
      less1: '1',
      moreThen1: '2',
      moreThen2: '3',
    };

    Object.keys(checksBoxValue).forEach(elem => {
      if (name === elem && newValue) {
        result += ageValues[elem];
      } else if (checksBoxValue[elem] && name !== elem) {
        result += ageValues[elem];
      }
    });

    if (result === '23') {
      result = '2';
    } else if (result === '12' || result === '' || result === '123') {
      result = '';
    } else if (result === '13') {
      result = '4';
    }

    setChecksBoxValue(prevState => {
      const newValues = {
        ...prevState,
        [name]: newValue,
      };
      return newValues;
    });

    dispatch(
      setFilters({
        ...filters,
        [name]: newValue,
      })
    );

    setFiltersState(prevState => ({
      ...prevState,
      age: result,
    }));
  };

  return (
    <FilterTypeWrapper>
      <OpenListWrapper onClick={onGeneralListFilterClick}>
        <ArrowDown isOpen={isOpenList} />
        <TitleFilterType>By age</TitleFilterType>
      </OpenListWrapper>

      {isOpenList && (
        <ListFilterTypes>
          <ItemFilterType>
            <LabelcheckBox htmlFor="less1">
              {checksBoxValue.less1 ? (
                <MdOutlineCheckBox fontSize="20" fill="#54ADFF" />
              ) : (
                <MdOutlineCheckBoxOutlineBlank fontSize="20" fill="#54ADFF" />
              )}
              <FilterNameOfType>3-12 m</FilterNameOfType>
            </LabelcheckBox>
            <InputcheckBox
              type="checkbox"
              id="less1"
              name="less1"
              value={checksBoxValue.less1}
              onChange={handleChackBoxChange}
            />
          </ItemFilterType>
          <ItemFilterType>
            <LabelcheckBox htmlFor="moreThen1">
              {checksBoxValue.moreThen1 ? (
                <MdOutlineCheckBox fontSize="20" fill="#54ADFF" />
              ) : (
                <MdOutlineCheckBoxOutlineBlank fontSize="20" fill="#54ADFF" />
              )}
              <FilterNameOfType>up to 1 year</FilterNameOfType>
            </LabelcheckBox>
            <InputcheckBox
              type="checkbox"
              id="moreThen1"
              name="moreThen1"
              value={checksBoxValue.moreThen1}
              onChange={handleChackBoxChange}
            />
          </ItemFilterType>
          <ItemFilterType>
            <LabelcheckBox htmlFor="moreThen2">
              {checksBoxValue.moreThen2 ? (
                <MdOutlineCheckBox fontSize="20" fill="#54ADFF" />
              ) : (
                <MdOutlineCheckBoxOutlineBlank fontSize="20" fill="#54ADFF" />
              )}
              <FilterNameOfType>up to 2 year</FilterNameOfType>
            </LabelcheckBox>
            <InputcheckBox
              type="checkbox"
              id="moreThen2"
              name="moreThen2"
              value={checksBoxValue.moreThen2}
              onChange={handleChackBoxChange}
            />
          </ItemFilterType>
        </ListFilterTypes>
      )}
    </FilterTypeWrapper>
  );
};

export default FiltersByAge;
