import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://yourpets.onrender.com/api';

export const getNews = createAsyncThunk('news/getNews', async (data, thunkAPI) => {
  try {
    const res = await axios.get(`/news${data}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getNewsBySearch = createAsyncThunk(
  'news/getNewsBySearch',
  async (data, thunkAPI) => {
    try {
      const res = await axios.get(`/news/search?title=${data}`);
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
