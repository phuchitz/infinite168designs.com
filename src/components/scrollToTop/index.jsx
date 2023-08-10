import React from "react";
import scrollToTop from "../../common/scrollToTop";

const ScrollToTop = () => {
  React.useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <div className="progress-wrap cursor-pointer">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <div className="icons">
        <ul>
          <a href="https://www.facebook.com/Infinite168Design" rel="noopener"><li className="facebook"><i className="fab fa-facebook-f"></i></li></a><br />
          <a href="https://www.youtube.com/channel/UCZI4Qs507xS_gClRq_FE0iw" rel="noopener"><li className="youtube"><i className="fab fa-youtube"></i></li></a><br />
          <a href="https://lin.ee/CZDvKvz" rel="noopener"><li className="line-social"><i className="fab fa-line"></i></li></a><br />
          <a href="#" rel="noopener"><li className="insta"><i className="fab fa-instagram"></i></li></a><br />
        </ul>
      </div>
    </>
  );
};

export default ScrollToTop;
