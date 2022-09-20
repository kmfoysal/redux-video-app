import React from 'react';
import RelatedVideos from '../../components/relatedVideos/RelatedVideos';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';

const VideoDetails = () => {
    return (
        <section class="pt-6 pb-20">
            <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div class="grid grid-cols-3 gap-2 lg:gap-8">
                    
                    <VideoPlayer />

                    {/* <!-- related videos --> */}
                     
                     <RelatedVideos />
                     
                </div>
            </div>
        </section>
    );
};

export default VideoDetails;