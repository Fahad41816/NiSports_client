import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  Token: null,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.Token = action.payload.Token;
    },
    LogOutUser: (state) => {
        state.user = null;
        state.Token = null;
    }
  },
});

export const {setUser, LogOutUser} = AuthSlice.actions;
export default AuthSlice;
