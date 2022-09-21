import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loader from '../loader/Loader';
import SingleRelatedVideo from '../singleRelatedVideo/SingleRelatedVideo';

const RelatedVideos = ({ currentVideoId, tags }) => {
  
  const dispatch = useDispatch();

  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(asyncRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  // decide what to render
  let content = null;

  if (isLoading) content = <Loader />;

  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <div className="col-span-12">No related videos found!</div>;
  }

  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => <SingleRelatedVideo key={video.id} video={video} />);
  }


  return (
    <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      {content}
    </div>
  );
};

export default RelatedVideos;