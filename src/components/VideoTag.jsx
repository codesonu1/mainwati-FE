import React from "react";

const VideoPlayer = () => {
  const videos = [
    {
      src: "https://www.youtube.com/watch?v=-BIZfMJAhXM",
    },
  ];

  return (
    <video width="320" height="240" controls>
      {videos.map((item, i) => (
        <source src={item.src} type="video/mp4" key={i} />
      ))}
    </video>
  );
};

export default VideoPlayer;
