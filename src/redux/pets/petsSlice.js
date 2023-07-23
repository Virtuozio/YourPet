import { createSlice } from '@reduxjs/toolkit';
import { addPet, fetchPets, deletePet } from './petsOperations';
const petsInitialState = {
  pets: [],
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
const petsSlice = createSlice({
  name: 'pets',
  initialState: petsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchPets.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.pets = payload;
      })
      .addCase(addPet.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.pets.push(payload);
      })
      .addCase(deletePet.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.pets.findIndex(pet => pet.id === payload.id);
        state.pets.splice(index, 1);
      })
      .addCase(fetchPets.pending, handlePending)
      .addCase(addPet.pending, handlePending)
      .addCase(deletePet.pending, handlePending)
      .addCase(fetchPets.rejected, handleRejected)
      .addCase(addPet.rejected, handleRejected)
      .addCase(deletePet.rejected, handleRejected);
  },
});

export const petsReducer = petsSlice.reducer;
