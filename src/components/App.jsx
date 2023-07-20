import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Notices from 'pages/Notices/Notices';
import User from 'pages/User/User';
import AddPet from 'pages/AddPet/AddPet';
import OurFriends from 'pages/OurFriends/OurFriends';
import Main from 'pages/Main/Main';
// import { useAuth } from 'hooks';
const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const News = lazy(() => import('pages/News/News'));

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
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
