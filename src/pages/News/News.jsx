import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from 'redux/news/newsOperations';
import { selectAllNews } from 'redux/news/newsSelectors';

import Title from './News.styled';
import NoticesSearch from '../../components/NoticesSearch/NoticesSearch';
import NewsSearch from '../../components/NewsSearch/NewsSearch';

const News = () => {
  const news = useSelector(selectAllNews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div>
      <Title>News</Title>
      <NoticesSearch />
      <NewsSearch news={news} />
    </div>
  );
};

export default News;
