import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credientials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credientials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

const login = createAsyncThunk("auth/login", async (credientials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", credientials);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");

      return data;
    } catch (error) {
      token.unset();
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export { register, logout, login, fetchCurrentUser };
