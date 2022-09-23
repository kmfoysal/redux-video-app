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
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      {/* <!-- video player --> */}
      <iframe
        width="100%"
        className="aspect-video"
        src={link}
        title={title}
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* <!-- video description --> */}
      <div>
        <h1 className="text-lg font-semibold tracking-tight text-slate-800">
          {title}
        </h1>
        <div className="pb-4 flex items-center space-between border-b">
          <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
            Uploaded on {date}
          </h2>

          {/* <!-- like/unlike --> */}
          <div className="flex gap-10 w-48">
            <div className="flex gap-1">
              <div className="shrink-0">
                <img className="w-5 block" src={Like} alt="Like" />
              </div>
              <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
            </div>
            <div className="flex gap-1">
              <div className="shrink-0">
                <img className="w-5 block" src={DisLike} alt="DisLike" />
              </div>
              <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
          {description}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;