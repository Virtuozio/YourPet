import FiltersByAge from 'components/FiltersByAge/FiltersByAge';
import FiltersByGender from 'components/FiltersByGender/FiltersByGender';

import {
  FilterWrapper,
  GeneralItemFilterType,
  ListFilterGeneralTypes,
  TitleFilters,
} from './Filters.styled';

const Filters = ({ setFiltersState }) => {
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
