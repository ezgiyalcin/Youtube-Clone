import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`cursor-pointer ${isRow && "flex gap-5  "}`}
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
    >
      <div>
        <img
          className={`rounded-lg mb-5 h-full ${
            isRow && "max-w-none w-32 h-20 "
          }`}
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[video.richThumbnail.length - 1].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
        />
      </div>
      <div className="">
        <h5
          className={`font-bold text-white text-l  ${
            isRow && "text-sm line-clamp-1 "
          }`}
        >
          {video.title}
        </h5>
        <div className={`flex gap-4 mt-5 items-center  ${isRow && "mt-1"}`}>
          <img
            src={
              video.channelThumbnail
                ? video.channelThumbnail[0].url
                : "/public/default.jpg"
            }
            className={`rounded-full w-14 h-14 ${isRow && "w-8 h-8"}`}
          />

          <div className="text-[#aaa] text-xs">
            <p>{video.channelTitle}</p>
            <div className="flex gap-2">
              <p>{millify(video.viewCount)}</p>
              <p>views {video.publishedTimeText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
