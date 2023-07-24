import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
// import { useAuth } from 'hooks';
const Home = lazy(() => import('pages/Home/Home'));
const Main = lazy(() => import('pages/Main/Main'));
const OurFriends = lazy(() => import('pages/OurFriends/OurFriends'));
const AddPet = lazy(() => import('pages/AddPet/AddPet'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const News = lazy(() => import('pages/News/News'));
const Notices = lazy(() => import('pages/Notices/Notices'));
const User = lazy(() => import('pages/User/User'));
const Error = lazy(() => import('pages/Error/Error'));

export const App = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/main" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/friends" element={<OurFriends />} />
        <Route path="/user" element={<User />} />
        <Route path="/add-pet" element={<AddPet />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
