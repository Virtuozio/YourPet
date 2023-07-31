import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://yourpets.onrender.com/api';

// const createSearchParams = params => new URLSearchParams(params).toString();

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async (fetchInfo, thunkAPI) => {
    try {
      // const { category, ...params } = credentials;
      const response = await axios.get(`/notices${fetchInfo}`);
      console.log(response.data.total);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (newNotice, thunkAPI) => {
    // if (!newNotice.petAvatar) delete newNotice['petAvatar'];
    // let formImageData = new FormData();

    // for (const key in newNotice) {
    //   if (newNotice[key]) {
    //     formImageData.append(key, newNotice[key]);
    //   }
    // }

    try {
      const res = await axios.post('/notices', newNotice);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/user/added/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticeById = createAsyncThunk(
  'notices/getNoticeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'getNoticeById --- operations: ',
        error.message
      );
    }
  }
);

export const getAllOwnNotices = createAsyncThunk(
  'notices/getAllOwnNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/users`);
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'notices/addToFavorite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`/notices/user/favorite/${id}`);
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeFromFavorite = createAsyncThunk(
  'notices/removeFromFavorite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/notices/user/favorite/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchFavoriteNotices = createAsyncThunk(
  'notices/fetchFavoriteNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/notices/user/favorite');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
