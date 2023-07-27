import { HomeWrapp, HomeBackgr, Title, TitleWrapp } from './Home.styled';

const Home = () => {
  return (
    <div>
      <HomeWrapp>
        <TitleWrapp>
          <Title>Take good care of your small pets</Title>
        </TitleWrapp>
        <HomeBackgr></HomeBackgr>
      </HomeWrapp>
    </div>
  );
};

export default Home;
