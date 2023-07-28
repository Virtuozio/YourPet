import { createSlice } from '@reduxjs/toolkit';
import { getFriends } from './friendsOperations';
const handlePending = state => {
  state.isLoadingFriends = true;
};

const handleRejected = (state, action) => {
  state.isLoadingFriends = false;
  state.errorFriends = action.payload;
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: [],
    isLoadingFriends: false,
    errorFriends: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getFriends.pending, handlePending)
      .addCase(getFriends.rejected, handleRejected)
      .addCase(getFriends.fulfilled, (state, action) => {
        state.isLoadingFriends = false;
        state.errorFriends = null;
        state.friends = action.payload;
      }),
});

export const friendsReducer = friendsSlice.reducer;
