import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
//import "node_modules/video-react/dist/video-react.css";

const Video2 = () => {
  React.useEffect(() => {
    console.clear();
  }, []);
  const [isOpen, setOpen] = React.useState(false);
  return (
    <section
    // className="video bg-img parallaxie"
    // style={{ backgroundImage: "url(/assets/img/bg-vid.png)" }}
    >
      <iframe
        src="https://player.vimeo.com/video/834019993?h=423c488409"
        width="auto"
        height="auto"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* {typeof window !== "undefined" && (
        <ModalVideo
          channel="vimeo"
          autoplay
          isOpen={isOpen}
          videoId="834019993"
          onClose={() => setOpen(false)}
        />
      )}
      <a
        className="vid valign"
        href="https://vimeo.com/834019993"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <div className="vid-butn">
          <span className="icon">
            <i className="pe-7s-play"></i>
          </span>
        </div>
      </a> */}
      {/* <div className="container">
        <div className="stauts">
          <div className="item">
            <h4>
              3<span>K</span> +
            </h4>
            <h6>Happy Clients</h6>
          </div>
          <div className="item">
            <h4>
              14<span>K</span> +
            </h4>
            <h6>Success Projects</h6>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Video2;
