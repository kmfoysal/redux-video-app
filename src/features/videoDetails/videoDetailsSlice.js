import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideoDetails } from "./videoDetailsAPI";

const initialState = {
  videoDetails: {},
  isLoading: false,
  isError: false,
  error: "",
};

// Async Thunk

export const asyncFetchVideoDetails = createAsyncThunk(
  "videoDetails/fetchvideoDetails",async (id) => {

    const videoDetails = await getVideoDetails(id);

    return videoDetails;
  }
);

const videoDetailsSlice = createSlice({
  name: "videoDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(asyncFetchVideoDetails.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(asyncFetchVideoDetails.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.videoDetails = action.payload;
      })
      .addCase(asyncFetchVideoDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.videoDetails = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoDetailsSlice.reducer;
