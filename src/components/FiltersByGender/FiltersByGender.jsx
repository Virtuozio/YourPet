import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectStatusFilters } from 'redux/notices/noticesSelectors';
import { setFilters } from 'redux/notices/noticesSlice';

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

  const filters = useSelector(selectStatusFilters);
  const [checksBoxValue, setChecksBoxValue] = useState(filters);

  const dispatch = useDispatch();

  const onGeneralListFilterClick = e => {
    setisOpenList(!isOpenList);
  };

  const handleChackBoxChange = e => {
    const { name } = e.target;
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
      sex: result,
    }));
  };

  return (
    <FilterTypeWrapper>
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
