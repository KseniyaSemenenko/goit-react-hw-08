import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const setToken = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkApi) => {
    try {
      const response = await authInstance.post('/users/signup', user);
      setToken(response.data.token);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
  try {
    const response = await authInstance.post('/users/login', user);
    setToken(response.data.token);
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const response = await authInstance.post('/users/logout');
    clearToken();
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkApi.rejectWithValue('Login failed! Sign in to your account!');
    }

    try {
      setToken(token);
      const response = await authInstance.get('/users/current');
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
