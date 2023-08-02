// import { createSelector } from '@reduxjs/toolkit'

export const selectIsLoadingNews = state => state.news.isLoadingNews;

export const selectAllNews = state => state.news.news;

export const selectSearchNews = state => state.news.searchNews;

export const selectTotalNews = state => state.news.totalNews;

// export const selectFilteredNews = createSelector(
//   [selectAllNews, selectSearchNews],
//   (news, search) => {
//     return news.filter(
//       news =>
//         news.title.toLowerCase().includes(search.toLowerCase()) ||
//         news.description.toLowerCase().includes(search.toLowerCase())
//     );
//   }
// );
