import { configureStore } from '@reduxjs/toolkit';
import relatedVideosSlice from '../features/relatedVideos/relatedVideosSlice';
import tagsSlice from '../features/tags/tagsSlice';
import videoDetailsSlice from '../features/videoDetails/videoDetailsSlice';
import videosSlice from '../features/videos/videosSlice';

export const store = configureStore({
  reducer: {
    videos: videosSlice,
    tags: tagsSlice,
    videoDetails: videoDetailsSlice,
    relatedVideos: relatedVideosSlice
  },
});
