import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from 'redux/news/newsOperations';
import { selectAllNews, selectTotalNews } from 'redux/news/newsSelectors';

import Title, {
  Form,
  Input,
  SubmitBtn,
  ClearBtn,
  SearchIco,
  CrossSmall,
} from './News.styled';
import NewsSearch from '../../components/NewsSearch/NewsSearch';
import Pagination from '@mui/material/Pagination';
import { animateScroll as scroll } from 'react-scroll';


const News = () => {
  const news = useSelector(selectAllNews);
  const totalNews = useSelector(selectTotalNews);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  // const location = useLocation();

  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) {
      dispatch(getNews(`?page=${page}&limit=9`));
    }
  }, [dispatch, page, query]);

  const submitHandler = e => {
    e.preventDefault();
    if (query) {
      dispatch(getNews(`?title=${query}&page=1&limit=9`))
      setPage(1);
 
    }
    else dispatch(getNews(`?page=1&limit=9`));
  };

  const onInputChange = e => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
  };

  const handleClear = () => {
    setQuery('');
    setPage(1);
    dispatch(getNews(`?page=${page}&limit=9`));
 
  };

  const handlePaginationChange = (e, p) => {
    setPage(p);
    if (query) {
      dispatch(getNews(`?title=${query}&page=${p}&limit=9`));
      scroll.scrollToTop();
    } else {
      dispatch(getNews(`?page=${p}&limit=9`));
      scroll.scrollToTop();
    }
  };

  return (
    <div>
      <Title>News</Title>
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
      <NewsSearch news={news} />

      {totalNews > 8 && (
        <Pagination
          count={Math.ceil(totalNews / 9)}
          size="large"
          variant="outlined"
          color="primary"
          showFirstButton
          showLastButton
          onChange={handlePaginationChange}
          page={page}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '100px',
            marginTop: '50px',
          }}
        />
      )}
    </div>
  );
};

export default News;
