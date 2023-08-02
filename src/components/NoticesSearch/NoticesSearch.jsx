import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getNewsBySearch } from 'redux/news/newsOperations';
import {
  fetchNotices,
  getNoticesBySearch,
} from 'redux/notices/noticesOperations';

import {
  Form,
  Input,
  SubmitBtn,
  ClearBtn,
  SearchIco,
  CrossSmall,
} from './NoticesSearch.styled';

const NoticesSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const submitHandler = e => {
    e.preventDefault();
    if (location.pathname === '/news')
      dispatch(getNewsBySearch(e.currentTarget.elements.query.value));
    else dispatch(getNoticesBySearch(e.currentTarget.elements.query.value));
  };

  const onInputChange = e => {
    const searchQuery = e.target.value;

    setQuery(searchQuery);
  };
  const handleClear = e => {
    setQuery('');
    dispatch(fetchNotices(''));
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
      <SubmitBtn type="submit" aria-label="Submit" query={query}>
        <SearchIco />
      </SubmitBtn>
      <ClearBtn
        type="button"
        onClick={handleClear}
        query={query}
        aria-label="Discard query"
      >
        <CrossSmall />
      </ClearBtn>
    </Form>
  );
};

export default NoticesSearch;
