/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const AboutUs6 = () => {
  return (
    <section className="about-us section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 main-color mb-10">About Us</h6>
              <h3 className="fw-600 text-u ls1 mb-30">Our Comapny</h3>
              <p>
              <h2 className="fz-40">
                บริษัท อินฟินิท 168 ดีไซน์ แอนด์ คอนสตรัคชั่น
              </h2>
              <p className="font-thai">
                เป็นบริษัทรับออกแบบตกแต่งภายใน บ้าน คอนโด ร้านค้า สำนักงาน บริการครบวงจร(Turnkey Service) โดยทีม อินทีเรียดีไซน์เนอร์
                ที่สามารถสร้างความโดดเด่น และสร้างเอกลักษณ์ของงานให้สอดคล้องกับ ผู้อยู่อาศัย ประกอบกับการสร้างจากทีมช่างมืออาชีพ ประสบการณ์การทำงานมากกว่า 10 ปี
              </p>
              </p>
              <Link href="/about">
                <a className="btn-curve btn-bord btn-lit mt-30">
                  <span>อ่านต่อ</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src="/assets/img/feat.png" alt="" />
            {/* <div className="stauts">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs6;
