import React from 'react';
import { useState } from 'react';

import {
  Form,
  Input,
  SubmitBtn,
  ClearBtn,
  SearchIco,
  CrossSmall,
} from './NoticesSearch.styled';
import { useDispatch } from 'react-redux';
import { getNoticesBySearch } from 'redux/notices/noticesOperations';

const NoticesSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(getNoticesBySearch(e.currentTarget.elements.query.value));

    console.log(e.currentTarget.elements.query.value);
  };

  const onInputChange = e => {
    const searchQuery = e.target.value;

    setQuery(searchQuery);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        type="text"
        name="query"
        id="searchQuery"
        placeholder="Search"
        onChange={onInputChange}
        value={query}
      />
      <SubmitBtn
        type="submit"
        aria-label="Submit"
        query={query}
      >
        <SearchIco />
      </SubmitBtn>
      <ClearBtn
        type="button"
        onClick={() => setQuery('')}
        query={query}
        aria-label="Discard query"
      >
        <CrossSmall />
      </ClearBtn>
    </Form>
  );
};

export default NoticesSearch;
