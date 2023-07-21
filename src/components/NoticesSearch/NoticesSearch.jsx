import React from 'react';
import { useState } from 'react';

import { Form, Input, SubmitBtn, ClearBtn } from './NoticesSearch.styled';
import { SearchIcon, CrossIcon } from 'utils/icons';

const NoticesSearch = () => {
  const [query, setQuery] = useState('');


  const submitHandler = e => {
    e.preventDefault();

    setQuery('');
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
      <SubmitBtn type="submit" aria-label="Submit" query={query}>
        <SearchIcon />
      </SubmitBtn>
      <ClearBtn
        type="button"
        onClick={() => setQuery('')}
        query={query}
        aria-label="Discard query"
      >
        <CrossIcon />
      </ClearBtn>
    </Form>
  );
};

export default NoticesSearch;
