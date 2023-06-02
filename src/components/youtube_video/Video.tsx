import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const Video = ({ link }: any) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      link,
      autoplay: 1,
    },
  };

  return <YouTube videoId="T6ATlgjzw" opts={opts} onReady={onPlayerReady} />;
};
export default Video;
