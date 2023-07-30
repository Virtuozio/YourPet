import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

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
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/user" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/user" component={<Login />} />}
        />
        <Route
          path="/user"
          element={<PrivateRoute redirectTo="/login" component={<User />} />}
        />

        <Route path="/main" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/notices" element={<Notices />}>
          {/* <Route path=":categoryName" element={<NoticesCategoryList />} /> */}
        </Route>
        <Route path="/friends" element={<OurFriends />} />
        <Route
          path="/add-pet"
          element={<PrivateRoute redirectTo="/login" component={<AddPet />} />}
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
