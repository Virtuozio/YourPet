import { createSlice } from '@reduxjs/toolkit';
import {
  addNotice,
  fetchNotices,
  getAllOwnNotices,
  deleteNotice,
  getNoticeById,
  removeFromFavorite,
  addToFavorite,
  fetchFavoriteNotices,
} from './noticesOperations';
const noticesInitialState = {
  notices: [],
  noticesFavorite: [],
  noticeAdd: {},
  isLoading: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices = payload;
      })
      .addCase(fetchNotices.pending, handlePending)
      .addCase(fetchNotices.rejected, handleRejected)
      .addCase(addNotice.fulfilled, (state, { payload }) => {
        state.notices.push(payload.result);
        state.isLoadingNotices = false;
        state.errorNotices = null;
        state.noticeAdd = payload.result;
      })
      .addCase(addNotice.pending, handlePending)
      .addCase(addNotice.rejected, handleRejected)
      .addCase(deleteNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.notices.find(notice => notice.id === payload.id);
        state.notices.splice(index, 1);
      })
      .addCase(deleteNotice.pending, handlePending)
      .addCase(deleteNotice.rejected, handleRejected)
      .addCase(getAllOwnNotices.pending, handlePending)
      .addCase(getAllOwnNotices.fulfilled, (state, { payload }) => {
        state.isLoadingNotices = false;
        state.errorNotices = null;
        state.notices = payload.result;
      })
      .addCase(getAllOwnNotices.rejected, handleRejected)
      .addCase(getNoticeById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices.find(notice => notice.id === payload.id);
      })
      .addCase(getNoticeById.pending, handlePending)
      .addCase(getNoticeById.rejected, handleRejected)
      .addCase(removeFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        // state.noticesFavorite = payload.result;
        // const index = state.noticesFavorite.find(
        //   notice => notice.id === payload.id
        // );
        // state.noticesFavorite.splice(index, 1);
      })
      .addCase(removeFromFavorite.pending, handlePending)
      .addCase(removeFromFavorite.rejected, handleRejected)
      .addCase(addToFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addToFavorite.pending, handlePending)
      .addCase(addToFavorite.rejected, handleRejected)
      .addCase(fetchFavoriteNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.noticesFavorite = payload;
      })
      .addCase(fetchFavoriteNotices.pending, handlePending)
      .addCase(fetchFavoriteNotices.rejected, handleRejected);
  },
});

export const noticesReducer = noticesSlice.reducer;
