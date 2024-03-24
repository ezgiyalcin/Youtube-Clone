import React, { useContext } from "react";
import LeftBar from "../Components/LeftBar";
import { youtubeContext } from "/src/context/youtubeContext.jsx";
import VideoCard from "../Components/VideoCard";
import Loader from "../Components/Loader";

const HomePage = () => {
  const { videos } = useContext(youtubeContext);
  console.log(videos);
  return (
    <div className="flex gap-10">
      <LeftBar />
      <div className="video-layout">
        {!videos ? (
          <Loader />
        ) : (
          videos.map(
            (item, i) =>
              item.type === "video" && <VideoCard key={i} video={item} />
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
