import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductState } from "../../utils/interface/redux";
import { IProduct } from "../../utils/interface/interface";

const initialState: IProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state: IProductState, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },

    removeProduct: (state: IProductState) => {
      state.products = [];
    },
  },
});
export const { setProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
