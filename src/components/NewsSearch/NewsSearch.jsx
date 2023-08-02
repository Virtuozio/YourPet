import { useSelector } from 'react-redux';
import { convertDateFormat } from 'utils/convertDateFormat';
import { selectIsLoadingNews } from 'redux/news/newsSelectors';

import { nanoid } from 'nanoid';

import {
  Text,
  NewsBottom,
  NewsItem,
  NewsLink,
  NewsList,
  Title,
  Img,
} from './NewsSearch.styled';

import Loader from 'components/Loader/Loader';
import Image from 'assets/default.png';

const NewsSearch = ({ news }) => {
  const isLoad = useSelector(selectIsLoadingNews);
  // const [sortNews, setSortNews] = useState([]);
  // useEffect(() => {
  //   if (news.length <= 0) return;

  //   setSortNews(news);
  // }, [news]);

  return (
    <>
      {isLoad ? (
        <Loader />
      ) : (
        <NewsList>
          {news.length > 0 &&
            news.map(({ url, title, imgUrl, text, date }) => (
              <NewsItem key={nanoid()}>
                <Img src={imgUrl ? imgUrl : Image} alt={title} />
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
          {news.length === 0 && <div>No news found at your request</div>}
        </NewsList>
      )}
    </>
  );
};

export default NewsSearch;
