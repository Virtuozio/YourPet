import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://yourpets.onrender.com/api';
export const fetchPets = createAsyncThunk(
  'pets/fetchPets',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/pets');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addPet = createAsyncThunk(
  'pets/addPet',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/pets', data, {
        withCredentials: false,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/pets/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
