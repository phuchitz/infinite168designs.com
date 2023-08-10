import React from "react";
import Image from "next/image";
import Link from "next/link";

function index() {
  return (
    <>
    <div className="bg-img">
      <div className="image-container">
          <img
            src="assets/img/contentIndex/index01.png"
            className="img-bg"
            alt=""
          />
          <div className="container-background">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10">
                  <div className="caption hmone mt-100">
                    <h5 className="thin">Welcome</h5>
                    <h1
                      data-splitting
                      className="words chars splitting main-color"
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
        </div>
        </div>
    </>
  );
}

export default index;
