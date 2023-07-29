import { createSlice } from '@reduxjs/toolkit';

const searchNoticesSlice = createSlice({
  name: 'searchNotices',

  initialState: '',

  reducers: {
    searchNoticesSet(state, action) {
      return (state = action.payload);
    },
  },
});

export const { searchNoticesSet } = searchNoticesSlice.actions;
export const searchNoticesReducer = searchNoticesSlice.reducer;
