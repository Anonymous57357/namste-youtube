import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoContainer } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);

      const json = await response.json();

      // console.log("Fetched Videos:", json.items);
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error.message);
    }
  };
  // watch?v=y99YgaQjgx4&t=23145s
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-4">
      {/* modified or  */}
      {videos[0] && <AdVideoContainer info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
