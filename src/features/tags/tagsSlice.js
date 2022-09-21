import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

// Async Thunk

export const asyncFetchTags = createAsyncThunk(
  "tags/fetachTag",
  async () => {
    const tags = await getTags();

    return tags;
  }
);

const tagSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(asyncFetchTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(asyncFetchTags.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(asyncFetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default tagSlice.reducer;
