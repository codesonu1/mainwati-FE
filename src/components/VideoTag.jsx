import React from "react";
import video   from "../assets/video.mp4";

const VideoPlayer = () => {
  const videos = [
    {
      src: "https://www.youtube.com/watch?v=-BIZfMJAhXM",
    },
  ];

  return (
    <video
      className="w-full h-full "
      controls
      loop
      autoPlay
      src={video}
      type="video/mp4"
    ></video>
  );
};

export default VideoPlayer;
