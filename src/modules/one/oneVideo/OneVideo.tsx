import React from "react";

type Props = {};

const OneVideo = (props: Props) => {
  return (
    <div>
      <iframe
        width="1024"
        height="576"
        src="https://www.youtube.com/embed/s2LYMGzPyII?list=PL5NOHND36jeIvfaEZJzi_15QkqS9bDsrb"
        title="AUTOCAD 3D - 1-DARS. 3D MODELING"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default OneVideo;
