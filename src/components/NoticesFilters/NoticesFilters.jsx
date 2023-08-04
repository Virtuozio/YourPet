import React, { useState, useEffect, useRef } from 'react';
import { useWindowSize } from 'hooks/useResize';

import Filters from 'components/Filters/Filters';
import {
  BtnFilterWrapper,
  FilterBtn,
  FilterIcon,
} from './NoticesFilters.styled';

const NoticesFilters = () => {
  const [screenWidth] = useWindowSize();
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenFilter(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const onFilterClick = e => {
    setIsOpenFilter(!isOpenFilter);
  };

  return (
    <BtnFilterWrapper ref={dropdownRef}>
      <FilterBtn
        id="filtersBtn"
        type="button"
        name="filterBtn"
        aria-label="Show filters"
        onClick={onFilterClick}
      >
        {screenWidth >= 768 && 'Filter'} <FilterIcon name="filterBtnIcon" />
      </FilterBtn>
      {isOpenFilter && <Filters />}
    </BtnFilterWrapper>
  );
};

export default NoticesFilters;
