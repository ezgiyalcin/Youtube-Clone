import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LeftBar from "../Components/LeftBar";
import { getData } from "../utils/getData";
import VideoCard from "../Components/VideoCard";
import Loader from "../Components/Loader";

const SearchResults = () => {
  const [results, setResults] = useState();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("search_query");
  useEffect(() => {
    getData(`/search?query=${query}&type=video`).then((data) =>
      setResults(data)
    );
  }, [query]);
  return (
    <div className="flex h-screen overflow-auto">
      <LeftBar />
      <div className=" flex flex-col gap-5 p-4  w-100">
        <p>Results for {query}</p>
        {!results ? (
          <Loader />
        ) : (
          results.data.map(
            (item) =>
              item.type === "video" && <VideoCard isRow={true} video={item} />
          )
        )}
      </div>
    </div>
  );
};

export default SearchResults;
