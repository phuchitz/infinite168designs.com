import React from "react";
import intro2Data from "../../data/Intro2.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Split from "../Split";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithVertical2 = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      removeSlashFromPagination();
    }, 1000);
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <>
      <header className="slid-half">
        <div id="" className="cta__slider-wrapper swiper-container">
          {!load ? (
            <Swiper
              speed={800}
              parallax={true}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              pagination={{
                type: "fraction",
                clickable: true,
                el: paginationRef.current,
              }}
              slidesPerView={1}
              direction="vertical"
              loop={true}
              grabCursor={true}
              watchSlidesProgress={true}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.params.pagination.el = paginationRef.current;
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].childNodes[0].setAttribute(
                      "data-swiper-parallax",
                      0.75 * swiper.height
                    );
                  }

                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;

                  swiper.params.pagination.el = paginationRef.current;

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();

                  swiper.pagination.destroy();
                  swiper.pagination.init();
                  swiper.pagination.update();
                });
              }}
              className="swiper-wrapper "
            >
              {intro2Data.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className="cta__slider-item swiper-slide"
                >
                  <div className="media-wrapper slide-inner valign">
                    {/* <div
                      className="bg-img img-fluid"
                      style={{ backgroundImage: `url(${slide.image})` }}
                      data-overlay-dark="5"
                    ></div> */}
                    <div className="image-container">
                      <img src="assets/img/contentIndex/index01.png" alt="" />
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-10">
                          <div className="caption">
                            <div className="custom">
                              <h5 className="thin custom-font">
                                {slide.title.first}
                              </h5>
                              <Split>
                                <h1
                                  data-splitting
                                  className="words chars splitting"
                                >
                                  <Link href="#">{slide.title.second}</Link>
                                </h1>
                              </Split>
                            </div>
                            {slide?.content && (
                              <p className="mt-10">
                                {slide.content.first} <br />
                                {slide.content.second}
                              </p>
                            )}
                            <Link href="/work">
                              <a className="btn-curve btn-color mt-30 btn-content-index">
                                <span>ดูรายละเอียด</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
          <div className="cta__slider-arrows">
            <i
              id="js-cta-slider-next"
              ref={navigationNextRef}
              className="cta__slider-arrow cta__slider-arrow--next"
            >
              <i className="fas fa-chevron-up"></i>
            </i>
            <i
              id="js-cta-slider-previous"
              ref={navigationPrevRef}
              className="cta__slider-arrow cta__slider-arrow--previous"
            >
              <i className="fas fa-chevron-down"></i>
            </i>
          </div>
        </div>
        <div
          ref={paginationRef}
          className="swiper-pagination top custom-font"
        ></div>
      </header>
    </>
  );
};

export default IntroWithVertical2;
