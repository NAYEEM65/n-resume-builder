import { createSlice } from "@reduxjs/toolkit";
const tkn = localStorage.auth ? localStorage.auth : null;
const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      const { token, user } = action.payload;
      state.user = user;
      state.token = token;
    },
    updateUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.token = JSON.parse(localStorage.auth).token;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { signIn, logOut, updateUser } = authSlice.actions;

export default authSlice.reducer;
