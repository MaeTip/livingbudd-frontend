import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store";
import { IAuth } from "../dto";

// initialize userToken from local storage
const token = localStorage.getItem('token') ? localStorage.getItem('token') : null
const initialState: IAuth = {
  token,
};

export const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {
    logout: () => initialState,
    setToken: (state, action: PayloadAction<IAuth>) => {
      if (typeof action.payload.token === "string") {
        localStorage.setItem("token", action.payload.token)
      }

      state.token = action.payload.token
    },
  },
});

export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer;
export const { logout, setToken } = authSlice.actions;

