import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
const rootReducer = combineReducers({
  authReducer,
  userReducer,
  productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
