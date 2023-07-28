import { createSelector } from '@reduxjs/toolkit';

export const selectNotices = state => state.notices.notices;

export const selectIsLoading = state => state.notices.isLoading;

export const selectError = state => state.notices.error;

export const selectNoticeAdd = state => state.notices.noticeAdd;

export const selectFilter = state => state.filter;

export const selectFavoriteNotices = state => state.notices.noticesFavorite;

export const selectVisibleNotices = createSelector(
  [selectNotices, selectFilter],
  (notices, filter) => {
    return notices.filter(notice =>
      notice.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// export const selectIsFavoriteNotices = createSelector(
//   [selectNotices, selectFavoriteNotices],
//   (notices, favNotices) => {
//     return notices.filter(notice => notice._id.includes(favNotices._id));
//   }
// );
