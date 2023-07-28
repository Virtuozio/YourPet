import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoadingFriends = state => state.friends.isLoadingFriends;

export const selectAllFriends = state => state.friends.friends;

export const selectSearchFriends = state => state.searchFriends;

export const selectFilteredfriends = createSelector(
  [selectAllFriends, selectSearchFriends],
  (friends, search) => {
    return friends.filter(
      friend =>
        friend.title.toLowerCase().includes(search.toLowerCase()) ||
        friend.description.toLowerCase().includes(search.toLowerCase())
    );
  }
);
