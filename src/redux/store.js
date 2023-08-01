import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { petsReducer } from './pets/petsSlice';
import { noticesReducer } from './notices/noticesSlice';
// import { filtersReducer } from './notices/filtersSlice';
import { friendsReducer } from './friends/friendsSlice';
import { newsReducer } from './news/newsSlice';
// import { searchNoticesReducer } from './notices/search/searchSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    pets: petsReducer,
    notices: noticesReducer,
    // filterNotices: filtersReducer,
    friends: friendsReducer,
    news: newsReducer,
    // searchNotices: searchNoticesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
