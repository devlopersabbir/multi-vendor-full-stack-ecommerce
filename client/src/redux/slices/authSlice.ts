import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthPayload, IAuthState } from "../../utils/interface/redux";

const initialState: IAuthState = {
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IAuthPayload>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
