import React from 'react';
// import { useState } from 'react';

import {
  Form,
  Input,
  SubmitBtn,
  ClearBtn,
  SearchIco,
  CrossSmall,
} from './NoticesSearch.styled';
import { useDispatch } from 'react-redux';
import { searchNoticesReducer } from 'redux/notices/searchSlice';
// import { SearchIcon, CrossIcon } from 'utils/icons';

const NoticesSearch = () => {
  // const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const handleFilterChange = e =>
    dispatch(searchNoticesReducer(e.target.value));

  // const submitHandler = e => {
  //   e.preventDefault();

  //   setQuery('');
  // };

  // const onInputChange = e => {
  //   const searchQuery = e.target.value;

  //   setQuery(searchQuery);
  // };

  return (
    <Form
    // onSubmit={submitHandler}
    >
      <Input
        type="text"
        name="query"
        id="searchQuery"
        placeholder="Search"
        onChange={handleFilterChange}
        // value={query}
      />
      <SubmitBtn
        type="submit"
        aria-label="Submit"
        // query={query}
      >
        <SearchIco />
      </SubmitBtn>
      <ClearBtn
        type="button"
        // onClick={() => setQuery('')}
        // query={query}
        aria-label="Discard query"
      >
        <CrossSmall />
      </ClearBtn>
    </Form>
  );
};

export default NoticesSearch;
