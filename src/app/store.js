import { configureStore } from '@reduxjs/toolkit';
import tagsSlice from '../features/tags/tagsSlice';
import videoDetailsSlice from '../features/videoDetails/videoDetailsSlice';
import videosSlice from '../features/videos/videosSlice';

export const store = configureStore({
  reducer: {
    videos: videosSlice,
    tags: tagsSlice,
    videoDetails: videoDetailsSlice,
  },
});
