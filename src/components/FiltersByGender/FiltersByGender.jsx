import { useState, useEffect, useRef } from 'react';
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from 'react-icons/md';

import {
  FilterNameOfType,
  FilterTypeWrapper,
  InputcheckBox,
  ItemFilterType,
  LabelcheckBox,
  ListFilterTypes,
  OpenListWrapper,
  TitleFilterType,
} from 'components/Filters/Filters.styled';
import { ArrowDown } from 'components/FiltersByAge/FiltersByAge.styled';

const FiltersByGender = ({ setFiltersState }) => {
  const [isOpenList, setisOpenList] = useState(false);
  const [checksBoxValue, setChecksBoxValue] = useState({
    female: false,
    male: false,
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
    let result = '';

    const newValue = !checksBoxValue[name];
    const { male, female } = checksBoxValue;
    if (newValue && !male && !female) {
      result = name;
    } else if (!newValue && female && male && name === 'female') {
      result = 'male';
    } else if (!newValue && female && male && name === 'male') {
      result = 'female';
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
      sex: allRes,
    }));
  };

  return (
    <FilterTypeWrapper ref={dropdownRef}>
      <OpenListWrapper onClick={onGeneralListFilterClick}>
        <ArrowDown isOpen={isOpenList} />
        <TitleFilterType>By gender</TitleFilterType>
      </OpenListWrapper>
      {isOpenList && (
        <ListFilterTypes>
          <ItemFilterType>
            <LabelcheckBox htmlFor="female">
              {checksBoxValue.female ? (
                <MdOutlineCheckBox fontSize="20" fill="#54ADFF" />
              ) : (
                <MdOutlineCheckBoxOutlineBlank fontSize="20" fill="#54ADFF" />
              )}
              <FilterNameOfType>female</FilterNameOfType>
            </LabelcheckBox>
            <InputcheckBox
              type="checkbox"
              id="female"
              name="female"
              value={checksBoxValue.female}
              onChange={handleChackBoxChange}
            />
          </ItemFilterType>
          <ItemFilterType>
            <LabelcheckBox htmlFor="male">
              {checksBoxValue.male ? (
                <MdOutlineCheckBox fontSize="20" fill="#54ADFF" />
              ) : (
                <MdOutlineCheckBoxOutlineBlank fontSize="20" fill="#54ADFF" />
              )}
              <FilterNameOfType>male</FilterNameOfType>
            </LabelcheckBox>
            <InputcheckBox
              type="checkbox"
              id="male"
              name="male"
              value={checksBoxValue.male}
              onChange={handleChackBoxChange}
            />
          </ItemFilterType>
        </ListFilterTypes>
      )}
    </FilterTypeWrapper>
  );
};

export default FiltersByGender;