import React from 'react';
import { useWindowSize } from 'hooks/useResize';


import { Btn, FilterIcon } from './NoticesFilters.styled';

const NoticesFilters = () => {
  const [screenWidth] = useWindowSize();
  return (
    <Btn id="filtersBtn" type="button" aria-label="Show filters">
      {screenWidth >= 768 && 'Filter'} <FilterIcon />
    </Btn>
  );
};

export default NoticesFilters;
