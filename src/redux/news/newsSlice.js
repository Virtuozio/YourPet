import { createSlice } from '@reduxjs/toolkit';
import { getNews } from './newsOperations';

const handlePending = state => {
  state.isLoadingNews = true;
};

const handleRejected = (state, action) => {
  state.isLoadingNews = false;
  state.errorNews = action.payload;
};

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    totalNews: 0,
    isLoadingNews: false,
    errorNews: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getNews.pending, handlePending)
      .addCase(getNews.rejected, handleRejected)
      .addCase(getNews.fulfilled, (state, action) => {
        state.isLoadingNews = false;
        state.errorNews = null;
        state.news = action.payload.newsList;
        state.totalNews = action.payload.total;
      }),
});

export const newsReducer = newsSlice.reducer;
