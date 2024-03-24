import React, { useEffect, useState } from "react";
import { getData } from "../utils/getData";
import { useSearchParams } from "react-router-dom";
import Loader from "./Loader";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Comments = () => {
  const [comment, setComment] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  useEffect(() => {
    getData(`/comments?id=${id}&extend=1`).then((data) => setComment(data));
  }, []);
  console.log(comment);
  return (
    <div>
      {!comment ? (
        <Loader />
      ) : (
        comment.data.map((item) => (
          <div className="flex text-xs gap-2 m-3 p-2 border rounded-lg  border-gray-700  ">
            <img
              src={item.authorThumbnail[0].url}
              className="rounded-full h-10 w-10"
              alt=""
            />
            <div className="flex flex-col gap-3">
              <h1>{item.authorText}</h1>
              <p>{item.textDisplay}</p>
              <div>
                <div className="flex items-center cursor-pointer ">
                  <div className="flex items-center gap-2 py-2 px-4 ">
                    <AiFillLike />
                    <p>2</p>
                  </div>
                  <div>
                    <AiFillDislike />
                  </div>
                  <b className="ml-5">Reply</b>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
