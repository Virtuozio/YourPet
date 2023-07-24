import React from 'react';
import { useWindowSize } from 'hooks/useResize';

import { FilterIcon } from 'utils/icons';

import { Btn } from './NoticesFilters.styled';

const NoticesFilters = () => {
  const [screenWidth] = useWindowSize();
  return (
    <Btn id="filtersBtn" type="button" aria-label="Show filters">
      {screenWidth >= 768 && 'Filter'} <FilterIcon />
    </Btn>
  );
};

export default NoticesFilters;
