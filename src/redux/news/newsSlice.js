import { createSlice } from '@reduxjs/toolkit';
import { getNews, getNewsBySearch } from './newsOperations';

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
      })
      .addCase(getNewsBySearch.pending, handlePending)
      .addCase(getNewsBySearch.rejected, handleRejected)
      .addCase(getNewsBySearch.fulfilled, (state, action) => {
        state.isLoadingNews = false;
        state.errorNews = null;
        state.news = action.payload.newsList;
      }),
});

export const newsReducer = newsSlice.reducer;
