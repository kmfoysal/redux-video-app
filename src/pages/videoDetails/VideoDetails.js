import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RelatedVideos from '../../components/relatedVideos/RelatedVideos';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';
import { asyncFetchVideoDetails } from '../../features/videoDetails/videoDetailsSlice';
import Loader from '../../components/loader/Loader'

const VideoDetails = () => {

  const { videoDetails, isLoading, isError, error } = useSelector((state) => state.videoDetails
  );

  const dispatch = useDispatch();

  const { videoId } = useParams();

  useEffect(() => {
    dispatch(asyncFetchVideoDetails(videoId));
  }, [dispatch, videoId]);

  const { id, tags } = videoDetails || {};

  // console.log(title);

  // decide what to render
  let content = null;
  if (isLoading) content = <Loader />

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !videoDetails?.id) {
    content = <div className="col-span-12">No video found!</div>;
  }

   if (!isLoading && !isError && videoDetails?.id) {
     content = (
       <div class="grid grid-cols-3 gap-2 lg:gap-8">
         <VideoPlayer videoDetails={videoDetails} />

         {/* <!-- related videos --> */}

         <RelatedVideos currentVideoId={id} tags={tags} />
       </div>
     );
   }

  return (
    <section class="pt-6 pb-20">
      <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default VideoDetails;