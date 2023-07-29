import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://yourpets.onrender.com/api';

export const getFriends = createAsyncThunk(
  'friends/getFriends',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/friends');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

