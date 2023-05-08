import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import quillReducer from "./slices/quillSlice";

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  productReducer,
  quillReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
