import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosAPI"


const initialState = {
    videos:[],
    isLoading: false,
    isError: false,
    error: '',
}


// Async Thunk 

export const asyncFetchVideos = createAsyncThunk('videos/fetchvideo', async ()=>{

    const videos = await getVideos();

    return videos;

});


const videoSlice = createSlice({

    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(asyncFetchVideos.pending, (state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(asyncFetchVideos.fulfilled, (state, action)=>{
            state.isError = false;
            state.isLoading = false;
            state.videos = action.payload;
        })
        .addCase(asyncFetchVideos.rejected, (state, action)=>{
            state.isLoading = false;
            state.videos = [];
            state.isError = true;
            state.error = action.error?.message;
        });
    }
});

export default videoSlice.reducer;