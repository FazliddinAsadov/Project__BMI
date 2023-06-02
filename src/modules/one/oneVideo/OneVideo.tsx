import React from "react";

type Props = {};

const OneVideo = (props: Props) => {
  return (
    <div>
      <iframe
        width="1024"
        height="576"
        src="https://www.youtube.com/embed/BdyGnAfZHDE"
        title="AutoCad  dasturi | 1# Kirish"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default OneVideo;
