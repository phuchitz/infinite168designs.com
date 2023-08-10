import React from "react";
import intro3Data from "../../data/intro3.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Split from "../Split";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Pagination, Parallax]);

const Intro3 = () => {
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
    <header className="slider">
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            parallax={true}
            loop={true}
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
            className="image-container"
            slidesPerView={1}
          >
            {intro3Data.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide responsive-image">
                <div
                  className="bg-img responsive-image"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div
          ref={paginationRef}
          className="swiper-pagination top botm custom-font"
        ></div>

        <div className="social-icon">
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
              <i className="fab fa-behance"></i>
            </a>
          </Link>
          <Link href="#">
            <a>
              <i className="fab fa-pinterest-p"></i>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Intro3;
