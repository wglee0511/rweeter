import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  preview: null,
};

const image = createSlice({
  name: "image",
  initialState,
  reducers: {
    actionGetPreview: (state, action) => {
      state.preview = action.payload;
    },
  },
});

export const { actionGetPreview } = image.actions;

export default image;
