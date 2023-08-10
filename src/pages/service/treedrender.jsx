import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Link from 'next/link'

function treedrender() {
  return (
    <>
      <MainLayout>
        <PageHeader
          title="3D Render"
          fullPath={[
            { id: 1, name: "home", url: "/" },
            { id: 2, name: "service", url: "/service/" },
            { id: 3, name: "treedrender", url: "/service/treedrender" }
          ]}
          image="/assets/img/works/modernluxury/01.png"
        />
        <section className="intro-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
                <div className="text">
                  <p>
                    ✅️บริการออกแบบตกแต่งภายใน โดยทีมดีไซน์เนอร์ มัณฑนากร สถาปนิก
                    ตรมละ 1,200 บาทต่อตรม (ภาพ 3d เสมือนจริง) 🎉ฟรี!!ค่าออกแบบเมื่อเซนสัญญาก่อสร้าง🎉
                  </p>
                  <p>
                    ✅️งานตกแต่งภายใน/ บิ้วอินเฟอร์นิเจอร์   วัสดุเกรดพรีเมี่ยม
                  </p>
                  <p>
                    👉บ้าน ขั้นต่ำ 8 แสนบาท
                  </p>
                  <p>
                    👉คอนโด /สำนักงาน/ร้านอาหาร คาเฟ่ ขั้นต่ำ 5 แสนบาท
                  </p>
                  <p className="text-center">
                    <Link href="/work" passHref>
                      <h5>
                        <a className="more mt-30 do-detail">
                          <button className="btn btn-outline-light">
                            <span>ดูรายละเอียด &nbsp;<i className="fas fa-chevron-right"></i></span>
                          </button>
                        </a>
                      </h5>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export default treedrender