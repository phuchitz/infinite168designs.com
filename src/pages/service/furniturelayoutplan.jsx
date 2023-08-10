import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import ProjectIntro from '../../components/Project-Intro'
import initIsotope from "../../common/initIsotope";

const furniturelayoutplan = ({ vis }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
    <MainLayout>
        <PageHeader 
            title="Furniture Layout Plan"
            fullPath={[
                { id: 1, name: "home", url: "/"},
                { id: 2, name: "service", url: "/service/"},
                { id: 3, name: "furniturelayoutplan", url: "/service/furniturelayoutplan"}
            ]}
            image="/assets/img/service/furniture/01.jpg"
        />
          <div className="container">
              <section className="about section-padding">
                <div className="row txt-container">
                  <div className="col-lg-10">
                    <div className="txt-cont align-middle">
                      <div className="title-about-text">
                        <h5>Furniture Lay-out Plan</h5>
                      </div>
                      <br />
                      <p className="mb-20 ">
                        • การจัดวางตำแหน่งเฟอร์นิเจอร์ และฟังก์ชันการใช้งานเป็นเรื่องสำคัญอินฟินิท 168 ดีไซน์ มี..ออกแบบทราสามารถ จัดวางฟังก์ชันที่คุฯต้องการให้เหมาะสมกับการใช้งานมากที่สุด และสอดคล้องกับความต้องการของลูกค้า
                      </p>
                      <p>• การจัดวางแปลน จะทำให้เราสามารถเห็นระยะของเฟอร์นิเจอร์รวมถึงระยะทางเดินสัญจร ก่อนที่จะก่อสร้างจริง</p>
                      
                      <br />
                      <p><center>** สนใจออกแบบตกแต่งภายใน ติดต่อได้ที่ **</center></p>
                      <p><center>อินฟินนิท 168 ดีไซน์ ยินดีให้คำปรึกษา</center></p>
                    </div>
                  </div>
                </div>
              </section>
          </div>
    </MainLayout>
    </>
  )
}

export default furniturelayoutplan