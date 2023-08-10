/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import HomeIndex from "../home7/index";

const Demos = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <style jsx>{`
        .works-header {
          min-height: 85vh;
          position: relative;
        }

        .works-header:after {
          content: "";
          position: absolute;
          top: 50px;
          left: 50px;
          right: 50px;
          bottom: 50px;
          background: #999;
          opacity: 0.2;
        }

        .works-header:before {
          background: #000;
        }

        .masonery .container-fluid {
          padding: 0 80px;
        }

        .masonery .item-img {
          position: relative;
          box-shadow: 0px 5px 10px rgba(50, 50, 50, 0.2);
          background: #333;
          padding: 15px;
          border-radius: 5px;
        }

        .masonery .item-img img {
          border-radius: 10px;
          overflow: hidden;
        }

        .masonery .gallery .items {
          padding: 0 40px;
          margin-top: 80px;
          text-align: center;
        }

        .masonery .gallery .items h6 {
          margin: 25px 0 15px;
          font-size: 17px;
          font-weight: 400;
          font-family: "Prompt", sans-serif;
          text-align: center;
        }

        .masonery .item-img .new {
          padding: 10px 30px;
          background: #75dab4;
          position: absolute;
          top: 0;
          left: -60px;
          width: 200px;
          transform: rotate(-30deg);
          font-size: 13px;
        }
      `}</style>
      <div className="main-content">
      < HomeIndex />
      </div>
    </>
  );
};

export default Demos;
