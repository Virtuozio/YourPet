import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import FiltersByAge from 'components/FiltersByAge/FiltersByAge';
import FiltersByGender from 'components/FiltersByGender/FiltersByGender';
import { getNoticesByFilter } from 'redux/notices/noticesOperations';

import {
  FilterWrapper,
  GeneralItemFilterType,
  ListFilterGeneralTypes,
  TitleFilters,
} from './Filters.styled';

const Filters = () => {
  const [filtersState, setFiltersState] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(filtersState).length === 0) {
      return;
    }
    dispatch(getNoticesByFilter(filtersState));
  }, [dispatch, filtersState]);

  return (
    <FilterWrapper>
      <TitleFilters>Filters</TitleFilters>
      <ListFilterGeneralTypes>
        <GeneralItemFilterType>
          <FiltersByAge setFiltersState={setFiltersState} />
        </GeneralItemFilterType>

        <GeneralItemFilterType>
          <FiltersByGender setFiltersState={setFiltersState} />
        </GeneralItemFilterType>
      </ListFilterGeneralTypes>
    </FilterWrapper>
  );
};

export default Filters;
