import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../utils/interface/interface";
import { IUserState } from "../../utils/interface/redux";

const initialState: IUserState = {
  users: [],
  selectedUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: IUserState, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },

    setSelectedUser: (state: IUserState, action: PayloadAction<IUser>) => {
      state.selectedUser = action.payload;
    },
    unsetSelectedUser: (state: IUserState) => {
      state.selectedUser = null;
    },

    removeUser: (state: IUserState) => {
      state.users = [];
    },
  },
});
export const { setUser, setSelectedUser, unsetSelectedUser, removeUser } =
  userSlice.actions;
export default userSlice.reducer;
