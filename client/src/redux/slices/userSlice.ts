import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../utils/interface/interface";
import { IUserState } from "../../utils/interface/redux";

const initialState: IUserState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: IUserState, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },

    removeUser: (state: IUserState) => {
      state.users = [];
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
