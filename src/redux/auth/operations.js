import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
    try {
        const response = await axios.post("/users/signup", user);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", user);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const logout = createAsyncThunk("auth/logout", async (token, thunkAPI) => {
    try {
        const response = await axios.post("/users/logout", token);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const refreshUser = createAsyncThunk("auth/refresh", async (token, thunkAPI) => {
    try {
        const response = await axios.get("/users/current", token);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})