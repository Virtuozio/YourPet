import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices } from './noticesOperations';
const noticesInitialState = {
  notices: [],
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
      .addCase(fetchNotices.rejected, handleRejected);
  },
});

export const noticesReducer = noticesSlice.reducer;
