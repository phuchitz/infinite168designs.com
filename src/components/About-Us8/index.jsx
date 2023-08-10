/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutUs8 = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 exp">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 main-color mb-10">About Us</h6>
              <h3 className="fw-400 text-u ls4">Our Comapny</h3>
            </div>
            <div className="box">
              <h2 className="fz-40 fw-600 ls1 mb-20">
                บริษัท อินฟินิท 168 ดีไซน์ แอนด์ คอนสตรัคชั่น
              </h2>
              <p className="font-thai">
                เป็นบริษัทรับออกแบบตกแต่งภายใน บ้าน คอนโด ร้านค้า สำนักงาน บริการครบวงจร(Turnkey Service) โดยทีม อินทีเรียดีไซน์เนอร์
                ที่สามารถสร้างความโดดเด่น และสร้างเอกลักษณ์ของงานให้สอดคล้องกับ ผู้อยู่อาศัย ประกอบกับการสร้างจากทีมช่างมืออาชีพ ประสบการณ์การทำงานมากกว่า 10 ปี
              </p>
            </div>
          </div>
          <div className="col-lg-7 img">
            {/* <img src="/assets/img/maincontent/c1400-844.png" alt="" /> */}

            <div className='video-wrapper'>
              {/* <iframe
                className='video-iframe'
                width="1100"
                height="619"
                src="https://www.youtube.com/embed/lsFoJ_UpYGU"
                title="INFINITE168DESIGN"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
              </iframe> */}
              <iframe  
              src="https://www.youtube.com/embed/1ad_6Ovhkqk" 
              title="INFINITE168DESIGN" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs8;