import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import initIsotope from "../../common/initIsotope";

const Sitesurvey = ({ vis }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <MainLayout>
        <PageHeader
          title="Site Survey"
          fullPath={[
            { id: 1, name: "home", url: "/" },
            { id: 2, name: "service", url: "/service/" },
            { id: 3, name: "sitesurvey", url: "/service/sitesurvey" },
          ]}
          image="/assets/img/service/sitesurvey/03.jpg"
        />
        <section className="works section-padding">
          <div className="container">
            <div className="main-header text-center">
              <h3>โปรโมชั่น</h3>
              <div className="tex-bg">Promotion</div>
            </div>
            <center>
              <div className="col-md-6 item">
                <div className="item ">
                  <div className="img ">
                    <img src="/assets/img/service/sitesurvey/001.jpg" alt="" />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}></div>
                </div>
              </div>
            </center>
            <div className="container-sitesurvey">
              <section className="about section-padding">
                <div className="row txt-container">
                  <div className="col-lg-10">
                    <div className="txt-cont align-middle">
                      {/* <div className="title-about-text">
                        <h5>โปรโมชั่นพิเศษ ฟรี!! สำรวจ</h5>
                      </div> */}
                      <br />
                      <p className="mb-20 ">
                        • อินฟินิท 168 ดีไซน์
                        มีทีมสำรวจหน้างานโดยทีมมัณฑนากรทีมสถาปนิกและทีมวิศวกรมืออาชีพ
                        สามารถให้คำปรึกษาและแนะนำลูกค้าได้ที่หน้างาน
                        ให้ลูกค้าได้งานที่มีคุณภาพและคุ้มค่ามากที่สุด
                        ทีมงานจะเช็คงานระบบ วัดระยะพื้นที่
                        เพื่อทำการวางแปลนเฟอร์นิเจอร์ และ Mood and Tone
                        เพื่อให้ลูกค้าเห็นภาพเบื้องต้นก่อนทำการออกแบบภาพ 3มิติ
                      </p>
                      <p>• ค่าสำรวจหน้างาน</p>
                      <p>
                        ปกติ 2000 บาท กทมและปริมณฑล (ทีมมัณฑนากร) <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3000 บาท
                        กทมและปริมณฑล (ทีมมัณฑนากรและสถาปนิก) <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5000 บาท
                        กทมและปริมณฑล (ทีมมัณฑนากร /สถาปนิก/วิศวกร)
                      </p>
                      <br />
                      <p>
                        ทีมสถาปนิกและวิศวกร
                        จะเหมาะสำหรับบ้านลูกค้าที่มีงานต่อเติมและทุบรื้อ
                        ที่เกี่ยวข้องกับโครงสร้าง
                        สามารถสอบถามรายละเอียดเพิ่มเติม
                      </p>
                      <br />
                      <p>
                        * ต่างจังหวัดคิดราคาตามระยะทาง โครงสร้าง
                        สามารถสอบถามรายละเอียดเพิ่มเติม
                      </p>
                      <br />
                      <p>** เช็คโปรโมชั่น ณ ช่วงเวลานั้นอีกครั้ง **</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};
export default Sitesurvey;
