import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  Form,
  Input,
  SubmitBtn,
  ClearBtn,
  SearchIco,
  CrossSmall,
} from './NoticesSearch.styled';
import {
  // fetchNotices,
  getNoticesBySearch,
  getNoticesByCategory,
} from 'redux/notices/noticesOperations';
import { getNewsBySearch } from 'redux/news/newsOperations';
import { useParams } from 'react-router';

const NoticesSearch = () => {
  const [query, setQuery] = useState('');
  const { categoryName } = useParams();
  console.log(categoryName);
  const dispatch = useDispatch();
  const location = useLocation();
  const submitHandler = e => {
    e.preventDefault();
    if (location.pathname === '/news')
      dispatch(getNewsBySearch(e.currentTarget.elements.query.value));
    else
      dispatch(
        getNoticesBySearch({
          input: e.currentTarget.elements.query.value,
          category: categoryName,
        })
      );
  };

  const onInputChange = e => {
    const searchQuery = e.target.value;

    setQuery(searchQuery);
  };
  const handleClear = e => {
    setQuery('');
    dispatch(getNoticesByCategory(`?category=${categoryName}`));
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
