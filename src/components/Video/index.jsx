import React from "react";

const Video = () => {
  return (
    <>
      <div className="container">
        <div className="video-wrapper">
          <iframe
            className="video-iframe"
            width="1100"
            height="619"
            src="https://www.youtube.com/embed/lsFoJ_UpYGU"
            title="INFINITE168DESIGN"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Video;
