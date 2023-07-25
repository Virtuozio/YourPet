import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://yourpets.onrender.com/api';
export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/notices');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
