import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  Text,
  Line,
  NewsBottom,
  NewsItem,
  NewsLink,
  NewsList,
  Title,
} from './NewsSearch.styled';
import { selectIsLoadingNews } from 'redux/news/newsSelectors';
import Loader from '../Loader/Loader';

const NewsSearch = ({ news }) => {
  const isLoad = useSelector(selectIsLoadingNews);
  const [sortNews, setSortNews] = useState([]);
  useEffect(() => {
    if (news.length <= 0) return;
    const compareDates = (a, b) => {
      const firstDate = new Date(a.date).getTime();
      const secondDate = new Date(b.date).getTime();
      return firstDate - secondDate;
    };

    const sortedNews = [...news].sort(compareDates);

    setSortNews(sortedNews);
  }, [news]);

  return (
    <>
      {isLoad ? (
        <Loader />
      ) : (
        <NewsList>
          {sortNews.length > 0 &&
            sortNews.map(({ url, title, description, date }) => (
              <NewsItem key={nanoid()}>
                <Line />
                <Title>{title}</Title>
                <Text
                //   text={description}
                //   maxLine={6}
                //   trimRight
                //   basedOn="words"
                />
                {description}
                <NewsBottom>
                  <p>{date}</p>
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
