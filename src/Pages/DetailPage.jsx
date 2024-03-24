import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";
import { getData } from "./../utils/getData";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import millify from "millify";
import StringArea from "../Components/stringArea";
import Loader from "../Components/Loader";
import VideoCard from "../Components/VideoCard";
import Comments from "../Components/Comments";
import LeftBar from "../Components/LeftBar";
LeftBar;

const DetailPage = () => {
  const [video, setVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const [showRelatedVideos, setShowRelatedVideos] = useState(false);
  const [showComments, setShowComments] = useState(true);
  const id = searchParams.get("v");
  useEffect(() => {
    setVideo(null);
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
  }, [searchParams]);
  console.log(video);
  return (
    <div className="h-screen overflow-auto flex">
      <LeftBar />
      <div className="flex gap-8 detail-page p-5 m-5 ">
        <div className="">
          <ReactPlayer
            width={"100%"}
            height={"50vh"}
            controls
            playing
            url={`https://www.youtube.com/watch?v=${id}`}
          />
          {!video ? (
            <p>Loading...</p>
          ) : (
            <>
              <h1 className="my-3 text-xl font-bold">{video.title}</h1>
              <div className="flex justify-between items-center gap-3 ">
                <div className="flex items-center gap-4">
                  <img
                    className="rounded-full w-12 h-12"
                    src={
                      video.channelThumbnail[video.channelThumbnail.length - 1]
                        .url
                    }
                    alt=""
                  />

                  <div>
                    <h4 className="font-bold">{video.channelTitle}</h4>
                    <p className="text-gray-400">{video.subscriberCountText}</p>
                  </div>
                  <button className="rounded-full bg-white text-black px-3 h-9 transition hover:bg-gray-400 ">
                    Subscribe
                  </button>
                </div>
                <div className="flex items-center bg-gray-600 rounded-full cursor-pointer h-10 ">
                  <div className="flex items-center gap-3 py-2 px-4 border-r">
                    <AiFillLike />
                    <p>{millify(video.likeCount)}</p>
                  </div>
                  <div className="py-2 px-4">
                    <AiFillDislike />
                  </div>
                </div>
              </div>
              <div className="bg-gray-600 rounded p-2 mt-4 cursor-pointer hover:bg-gray-700">
                <div className="flex gap-3">
                  <p>{millify(video.viewCount)}</p>
                  <p>{new Date(video.publishDate).toLocaleDateString()}</p>
                </div>
                <StringArea text={video.description} />
              </div>
            </>
          )}
        </div>
        <div className="flex gap-3 h-10 sm-hidden ">
          <button
            id="CommentRelated"
            className={`text-xl cursor-pointer bg-gray-800 rounded-full p-1 ${
              showComments ? "bg-gray-400" : ""
            }`}
            onClick={() => {
              setShowComments(true);
              setShowRelatedVideos(false);
            }}
          >
            Comments
          </button>
          <button
            id="CommentRelated"
            className={`text-xl cursor-pointer bg-gray-800 rounded-full p-1 ${
              showRelatedVideos ? "bg-gray-400" : ""
            }`}
            onClick={() => {
              setShowComments(false);
              setShowRelatedVideos(true);
            }}
          >
            Related Videos
          </button>
        </div>
        <div className="flex flex-col gap-5">
          {showComments && <Comments />}
        </div>
        <div className="detail-video-card flex flex-col gap-5">
          {!video ? (
            <Loader />
          ) : (
            video.relatedVideos.data.map(
              (item) =>
                item.type === "video" && <VideoCard isRow={true} video={item} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
