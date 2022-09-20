import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchVideos } from '../../features/videos/videosSlice';
import Loader from '../loader/Loader';
import VideoGridItem from '../videoGridItem/VideoGridItem';

const VideoGrid = () => {
    
  const dispatch = useDispatch();

  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    dispatch(asyncFetchVideos());
  }, [dispatch]);

  // set condition what to render

  let content;

  if(isLoading){
    content = <Loader />
  }

  if(!isLoading && isError) {
    content = <div class="col-span-12">{error}</div>;
  }

  if(!isLoading && !isError && videos.length === 0){
     content = <div class="col-span-12">No videos available !!</div>;
  }

  if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => <VideoGridItem key={video.id} video={video} />);
  }


  return (
    <section class="pt-12">
      <section class="pt-12">
        <div class="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          
          {content}

        </div>
      </section>
    </section>
  );
};

export default VideoGrid;