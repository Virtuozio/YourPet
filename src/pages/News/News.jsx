import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from 'redux/news/newsOperations';
import { selectAllNews, selectTotalNews } from 'redux/news/newsSelectors';

import Title from './News.styled';
import NoticesSearch from '../../components/NoticesSearch/NoticesSearch';
import NewsSearch from '../../components/NewsSearch/NewsSearch';
import Pagination from '@mui/material/Pagination';

const News = () => {
  const news = useSelector(selectAllNews);
  
  const totalNews = useSelector(selectTotalNews);
  
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews(`?page=${page}&limit=9`));
  }, [dispatch, page]);

  const handleChange = (e, p) => {
    setPage(p);
    
  };

  return (
    <div>
      <Title>News</Title>
      <NoticesSearch />
      <NewsSearch news={news} />

      {/* {totalNews > 8 && ( */}
          <Pagination
            count={Math.ceil(totalNews / 9)}
            size="large"
            variant="outlined"
            color="primary"
            showFirstButton
            showLastButton
            // siblingCount={1}
            // boundaryCount={0}
            onChange={handleChange}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '100px',
              marginTop: '50px',
            }}
          />
        {/* )} */}
    </div>
  );
};

export default News;
