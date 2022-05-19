import { createSlice } from "@reduxjs/toolkit";
import axios from "../config/axios";
import { removeAccessToken, setAccessToken } from "../services/localStorage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    // change value initialState
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload?.user || null;
    },
    logout: (state) => {
      removeAccessToken();
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;

export const loginAsync = (username, password) => async (dispatch) => {
  const res = await axios.post("/users/login", { username, password });
  setAccessToken(res.data.token);
  dispatch(login());
};

// get login
export const initUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/users");
    dispatch(login({ user: res.data.user }));
  } catch (err) {
    dispatch(logout());
  }
};
