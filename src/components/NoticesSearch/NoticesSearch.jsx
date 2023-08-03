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
import { getNews, getNewsBySearch } from 'redux/news/newsOperations';
import { useParams } from 'react-router';

const NoticesSearch = ({ handleSearch }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [query, setQuery] = useState('');

  const { categoryName } = useParams();

  const submitHandler = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.query.value;
    if (location.pathname === '/news') {
      handleSearch(searchQuery);
      dispatch(getNewsBySearch(`?title=${searchQuery}&page=1&limit=9`));
    } else
      dispatch(
        getNoticesBySearch({
          category: categoryName,
          input: searchQuery,
        })
      );
  };

  const onInputChange = e => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
  };
  const handleClear = () => {
    setQuery('');
    if (location.pathname === '/news') dispatch(getNews(`?page=${1}&limit=9`));
    else dispatch(getNoticesByCategory(`?category=${categoryName}`));
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
