import React from 'react';
import Like from '../../assets/like.svg';
import DisLike from "../../assets/unlike.svg";


const VideoPlayer = ({ videoDetails }) => {

  // const { videoId } = useParams();

  // const { videos } = useSelector((state) => state.videos);

  // const singleDetails = videos?.find((video) => video.id === Number(videoId));

  // console.log(singleDetails);

  const { link, title, date, description } = videoDetails;

  return (
    <div class="col-span-full w-full space-y-8 lg:col-span-2">
      {/* <!-- video player --> */}
      <iframe
        width="100%"
        class="aspect-video"
        src={link}
        title={title}
        frameborder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      {/* <!-- video description --> */}
      <div>
        <h1 class="text-lg font-semibold tracking-tight text-slate-800">
          {title}
        </h1>
        <div class="pb-4 flex items-center space-between border-b">
          <h2 class="text-sm leading-[1.7142857] text-slate-600 w-full">
            Uploaded on {date}
          </h2>

          {/* <!-- like/unlike --> */}
          <div class="flex gap-10 w-48">
            <div class="flex gap-1">
              <div class="shrink-0">
                <img class="w-5 block" src={Like} alt="Like" />
              </div>
              <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
            </div>
            <div class="flex gap-1">
              <div class="shrink-0">
                <img class="w-5 block" src={DisLike} alt="DisLike" />
              </div>
              <div class="text-sm leading-[1.7142857] text-slate-600">100K</div>
            </div>
          </div>
        </div>

        <div class="mt-4 text-sm text-[#334155] dark:text-slate-400">
          {description}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;