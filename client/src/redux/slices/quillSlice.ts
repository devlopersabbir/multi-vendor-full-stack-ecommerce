import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IQuallState {
  text: any;
}

const initialState: IQuallState = {
  text: "",
};

const quillSlice = createSlice({
  name: "quill",
  initialState,
  reducers: {
    setQuill: (state: IQuallState, action: PayloadAction<IQuallState>) => {
      state.text = action.payload.text;
    },
  },
});
export const { setQuill } = quillSlice.actions;
export default quillSlice.reducer;
