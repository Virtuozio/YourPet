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
  getNoticesByCategory,
  getNoticesBySearch,
  getFavNoticesbyCategory,
  fetchAllFavNotices,
  removeFromFavoriteCategory,
  getNoticesByFilter,
} from './noticesOperations';

const noticesInitialState = {
  notices: [],
  noticesFavorite: [],
  totalNotices: '',
  noticeAdd: {},
  isLoading: false,
  error: null,

  filters: {
    less1: false,
    moreThen1: false,
    moreThen2: false,
    female: false,
    male: false,
  },
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
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices = payload.noticesList;
        state.totalNotices = payload.total;
      })
      .addCase(fetchNotices.pending, handlePending)
      .addCase(fetchNotices.rejected, handleRejected)

      .addCase(addNotice.fulfilled, (state, { payload }) => {
        state.notices.unshift(payload);
        state.isLoadingNotices = false;
        state.errorNotices = null;
        state.noticeAdd = payload;
      })
      .addCase(addNotice.pending, handlePending)
      .addCase(addNotice.rejected, handleRejected)

      .addCase(deleteNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices = state.notices.filter(
          notice => notice._id !== payload.item._id
        );
      })
      .addCase(deleteNotice.pending, handlePending)
      .addCase(deleteNotice.rejected, handleRejected)

      .addCase(getAllOwnNotices.pending, handlePending)
      .addCase(getAllOwnNotices.fulfilled, (state, { payload }) => {
        state.isLoadingNotices = false;
        state.errorNotices = null;
        state.notices = payload.noticesList;
        state.totalNotices = payload.total;
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
        state.noticesFavorite = state.noticesFavorite.filter(
          notice => notice._id !== payload._id
        );
      })
      .addCase(removeFromFavorite.pending, handlePending)
      .addCase(removeFromFavorite.rejected, handleRejected)

      .addCase(addToFavorite.pending, handlePending)
      .addCase(addToFavorite.rejected, handleRejected)
      .addCase(addToFavorite.fulfilled, (state, { payload }) => {
        state.noticesFavorite.push(payload);
        state.isLoading = false;
        state.error = null;
      })

      .addCase(fetchFavoriteNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.noticesFavorite = payload.noticesList;
      })
      .addCase(fetchFavoriteNotices.pending, handlePending)
      .addCase(fetchFavoriteNotices.rejected, handleRejected)

      .addCase(fetchAllFavNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.noticesFavorite = payload.allFavNotices;
      })
      .addCase(fetchAllFavNotices.pending, handlePending)
      .addCase(fetchAllFavNotices.rejected, handleRejected)

      .addCase(getNoticesByCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices = payload.noticesList;
        state.totalNotices = payload.total;
      })
      .addCase(getNoticesByCategory.pending, handlePending)
      .addCase(getNoticesByCategory.rejected, handleRejected)

      .addCase(getNoticesBySearch.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices = payload.noticesList;
        state.totalNotices = payload.total;
      })
      .addCase(getNoticesBySearch.pending, handlePending)
      .addCase(getNoticesBySearch.rejected, handleRejected)

      .addCase(getFavNoticesbyCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices = payload.noticesList;
        state.totalNotices = payload.total;
      })
      .addCase(getFavNoticesbyCategory.pending, handlePending)
      .addCase(getFavNoticesbyCategory.rejected, handleRejected)
      .addCase(removeFromFavoriteCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.noticesFavorite = state.noticesFavorite.filter(
          notice => notice._id !== payload._id
        );
        state.notices = state.notices.filter(
          notice => notice._id !== payload._id
        );
        state.totalNotices = payload.total;
      })
      .addCase(removeFromFavoriteCategory.pending, handlePending)
      .addCase(removeFromFavoriteCategory.rejected, handleRejected)

      .addCase(getNoticesByFilter.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notices = payload.noticesList;
        state.totalNotices = payload.total;
      })
      .addCase(getNoticesByFilter.pending, handlePending)
      .addCase(getNoticesByFilter.rejected, handleRejected);
  },
});

export const { setFilters } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
