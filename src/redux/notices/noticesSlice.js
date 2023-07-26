import { createSlice } from '@reduxjs/toolkit';
import {
  addNotice,
  fetchNotices,
  getAllOwnNotices,
  deleteNotice,
  // getNoticeById,
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
        const index = state.notices.findIndex(
          notice => notice.id === payload.id
        );
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
      .addCase(getAllOwnNotices.rejected, handleRejected);
    // .addCase(getNoticeById.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.noticesFavorite.findIndex(
    //     notice => notice.id === payload.id
    //   );
    //   state.notices.splice(index, 1);
    // })
    // .addCase(getNoticeById.pending, handlePending)
    // .addCase(getNoticeById.rejected, handleRejected);
  },
});

export const noticesReducer = noticesSlice.reducer;
