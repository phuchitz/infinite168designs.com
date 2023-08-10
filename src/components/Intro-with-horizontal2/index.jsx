/* eslint-disable @next/next/no-img-element */
import React from "react";
import introData from "../../data/Intro-with-horizontal.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Split from "../Split";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithHorizontal2 = () => {
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
    <header className="slider slider-slide">
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
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
                    0.75 * swiper.width
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
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                  {/* <div className="container">
                    <div className="row">
                      <div className="col-lg-10 offset-lg-1">
                        <div className="caption hmone">
                          <Split>
                            <h1
                              data-splitting
                              className="words chars splitting"
                            >
                              <Link href="#">
                                <a>
                                  {slide.title.first} <br />
                                  {slide.title.second}
                                </a>
                              </Link>
                            </h1>
                          </Split>
                          {slide?.content && (
                            <p className="mt-10">
                              {slide.content.first} <br />
                              {slide.content.second}
                            </p>
                          )}
                          <Link href="/project-details">
                            <a className="btn-curve btn-bord btn-lit mt-30">
                              <span>Read More</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8 col-md-10">
                        <div className="caption hmone mt-100">
                          <h5 className="thin">Welcome</h5>
                          <h1
                            data-splitting
                            className="words chars splitting main-color-font"
                          >
                            INFINITE168DESIGN
                          </h1>
                          <p className="mt-10">
                            รับออกแบบตกแต่งภายใน
                            สร้างสรรค์หลากหลายสไตล์เพื่อแสดงถึงความเป็นตัวคุณ
                          </p>
                          <Link href="/about">
                            <a className="btn-curve btn-bord btn-lit mt-30">
                              <span>อ่านต่อ</span>
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
        <div className="setone">
          <div
            className="swiper-button-next swiper-nav-ctrl next-ctrl"
            ref={navigationNextRef}
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl"
            ref={navigationPrevRef}
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        {/* <div className="side">
          <div className="logo-icon">
            <a className="logo" href="#">
              <img src="/assets/img/logo-light.png" alt="logo" />
            </a>
          </div>
          <div className="swiper-pagination" ref={paginationRef}></div>
          <div className="social">
            <Link href="#">
              <a>
                <i className="fab fa-facebook-f"></i>
              </a>
            </Link>
            <Link href="#">
              <a>
                <i className="fab fa-twitter"></i>
              </a>
            </Link>
            <Link href="#">
              <a>
                <i className="fab fa-instagram"></i>
              </a>
            </Link>
            <Link href="#">
              <a>
                <i className="fab fa-youtube"></i>
              </a>
            </Link>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default IntroWithHorizontal2;
