import { createSelector } from '@reduxjs/toolkit';

export const selectPets = state => state.pets.pets;
export const selectIsLoading = state => state.pets.isLoading;
export const selectError = state => state.pets.error;
export const selectFilter = state => state.filter;

export const selectVisiblepets = createSelector(
  [selectPets, selectFilter],
  (pets, filter) => {
    return pets.filter(pet =>
      pet.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
