import { createSelector } from '@reduxjs/toolkit';

export const selectNotices = state => state.notices.notices;
export const selectIsLoading = state => state.notices.isLoading;
export const selectError = state => state.notices.error;
export const selectFilter = state => state.filter;
export const selectVisibleNotices = createSelector(
  [selectNotices, selectFilter],
  (notices, filter) => {
    console.log(notices);
    return notices.filter(notice =>
      notice.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);