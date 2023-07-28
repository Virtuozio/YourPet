import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from 'redux/news/newsOperations';
import { selectAllNews } from 'redux/news/newsSelectors';

const News = () => {
  const news = useSelector(selectAllNews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  console.log(news);
  return <div>News</div>;
};

export default News;
