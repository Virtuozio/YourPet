import { useState, useEffect, useRef } from 'react';

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

  const [checksBoxValue, setChecksBoxValue] = useState({
    less1: false,
    moreThen1: false,
    moreThen2: false,
  });
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisOpenList(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const onGeneralListFilterClick = e => {
    setisOpenList(!isOpenList);
  };

  const handleChackBoxChange = e => {
    const { name } = e.target;
    let allRes = '';

    const newValue = !checksBoxValue[name];
    let result = '';
    let age = '';

    switch (name) {
      case 'less1':
        age = '1';
        break;
      case 'moreThen1':
        age = '2';
        break;
      case 'moreThen2':
        age = '3';
        break;
      default:
        age = '';
    }

    const { less1, moreThen1, moreThen2 } = checksBoxValue;

    if (!less1 && !moreThen1 && !moreThen2 && newValue) {
      result = `${age}`;
    } else if (less1 && newValue && name === 'moreThen1') {
      result = '';
    } else if (less1 && newValue && name === 'moreThen2') {
      result = '4';
    } else if (less1 && moreThen1 && newValue) {
      result = '';
    } else if (moreThen1 && newValue && name === 'less1') {
      result = '';
    } else if (moreThen1 && newValue && name === 'moreThen2') {
      result = '2';
    } else if (moreThen1 && less1 && newValue) {
      result = '';
    } else if (moreThen1 && moreThen2 && newValue) {
      result = '';
    } else if (moreThen2 && newValue && name === 'less1') {
      result = '4';
    } else if (moreThen2 && newValue && name === 'moreThen1') {
      result = '2';
    } else if (moreThen2 && moreThen1 && newValue) {
      result = '';
    } else if (moreThen2 && less1 && newValue) {
      result = '';
    } else if (less1 && moreThen1 && !newValue && name === 'less1') {
      result = '2';
    } else if (less1 && moreThen1 && !newValue && name === 'moreThen1') {
      result = '1';
    } else if (less1 && moreThen2 && !newValue && name === 'less1') {
      result = '3';
    } else if (less1 && moreThen2 && !newValue && name === 'moreThen2') {
      result = '1';
    } else if (moreThen1 && moreThen2 && !newValue && name === 'moreThen1') {
      result = '3';
    } else if (moreThen1 && moreThen2 && !newValue && name === 'moreThen2') {
      result = '2';
    } else if (
      less1 &&
      moreThen1 &&
      moreThen2 &&
      !newValue &&
      name === 'less1'
    ) {
      result = '2';
    } else if (
      less1 &&
      moreThen1 &&
      moreThen2 &&
      !newValue &&
      name === 'moreThen1'
    ) {
      result = '4';
    } else if (
      less1 &&
      moreThen1 &&
      moreThen2 &&
      !newValue &&
      name === 'moreThen2'
    ) {
      result = '';
    } else {
      result = '';
    }

    allRes = result;

    setChecksBoxValue(prevState => {
      const newValues = {
        ...prevState,
        [name]: newValue,
      };
      return newValues;
    });
    setFiltersState(prevState => ({
      ...prevState,
      age: allRes,
    }));
  };

  return (
    <FilterTypeWrapper ref={dropdownRef}>
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
