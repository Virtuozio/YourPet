import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import img from '../NewsSearch/default.png';
import {
  Text,
  // Line,
  NewsBottom,
  NewsItem,
  NewsLink,
  NewsList,
  Title,
  Img,
} from './NewsSearch.styled';
import { selectIsLoadingNews } from 'redux/news/newsSelectors';
import Loader from '../Loader/Loader';
import { convertDateFormat } from 'utils/convertDateFormat';

const NewsSearch = ({ news }) => {
  const isLoad = useSelector(selectIsLoadingNews);
  const [sortNews, setSortNews] = useState([]);
  useEffect(() => {
    if (news.length <= 0) return;

    setSortNews(news);
  }, [news]);

  return (
    <>
      {isLoad ? (
        <Loader />
      ) : (
        <NewsList>
          {sortNews.length > 0 &&
            sortNews.map(({ url, title, imgUrl, text, date }) => (
              <NewsItem key={nanoid()}>
                {/* <Line /> */}
                <Img src={imgUrl ? imgUrl : img} alt={title} />
                <Title>{title}</Title>
                <Text>{text}</Text>
                <NewsBottom>
                  <p>{convertDateFormat(date)}</p>
                  <NewsLink
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Read more
                  </NewsLink>
                </NewsBottom>
              </NewsItem>
            ))}
          {sortNews.length === 0 && <div>No news found at your request</div>}
        </NewsList>
      )}
    </>
  );
};

export default NewsSearch;
