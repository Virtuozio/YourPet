import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews, getNewsBySearch } from 'redux/news/newsOperations';
import { selectAllNews, selectTotalNews } from 'redux/news/newsSelectors';

import Title from './News.styled';
import NoticesSearch from '../../components/NoticesSearch/NoticesSearch';
import NewsSearch from '../../components/NewsSearch/NewsSearch';
import Pagination from '@mui/material/Pagination';

const News = () => {
  const news = useSelector(selectAllNews);
  const totalNews = useSelector(selectTotalNews);
  const [page, setPage] = useState(1);
  const [querry, setQuerry] = useState('');

  const dispatch = useDispatch();

  const handleSearch = data => {
    setPage(1);
    setQuerry(data);
  };

  useEffect(() => {
    if (querry) {
      dispatch(getNewsBySearch(`?title=${querry}&page=${page}&limit=9`));
    } else dispatch(getNews(`?page=${page}&limit=9`));
  }, [dispatch, page, querry]);

  const handleChange = (e, p) => {
    setPage(p);
  };

  return (
    <div>
      <Title>News</Title>
      <NoticesSearch handleSearch={handleSearch} />
      <NewsSearch news={news} />

      {/* {totalNews > 8 && ( */}
      <Pagination
        count={Math.ceil(totalNews / 9)}
        size="large"
        variant="outlined"
        color="primary"
        showFirstButton
        showLastButton
        onChange={handleChange}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '100px',
          marginTop: '50px',
        }}
      />
    </div>
  );
};

export default News;
