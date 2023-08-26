/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import Image from "next/image";

const WorkThreeColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img three-col section-padding">
        <div className="container">
          <div className="filtering text-center mb-30">
            <div className="filter fs-3">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".modernlux">Modern Luxury</span>
              <span data-filter=".modernclassic">Modern Classic Luxury</span>
              <span data-filter=".modernloft">Modern Loft</span>
              <span data-filter=".modernminimal">Modern Minimal</span>
            </div>
          </div>
          <div className="row gallery">

            {/* Modern Luxury */}
            <div className="col-lg-4 col-md-6 items modernlux">
              <div className="item">
                <div className="img">
                  {/* <img src="/assets/img/blog/blog1.png" alt="" /> */}
                  <Image
                    src="/assets/img/works/modernluxury/01/wlux1.png"
                    width={800}
                    height={637}
                  />
                </div>
                <div className="cont vis">
                  <span>บางกอกบูเลอวาร์ด</span>
                  <h5>ดอนเมือง แจ้งวัฒนะ</h5>
                  <span>
                    <Link href="/work/modernluxury-1" passHref>
                      <a className="more mt-30 do-detail">
                        อ่านต่อ <i className="fas fa-chevron-right"></i>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            {/* โครงการ แกรนดิโอ รามอินทรา-วงแหวน */}
            <div className="col-lg-4 col-md-6 items modernlux">
              <div className="item">
                <div className="img">
                  {/* <img src="/assets/img/blog/blog1.png" alt="" /> */}
                  <Image
                    src="/assets/img/works/modernluxury/02/bg.jpg"
                    width={800}
                    height={637}
                  />
                </div>
                <div className="cont vis">
                  <span>โครงการ แกรนดิโอ</span>
                  <h5>รามอินทรา วงแหวน</h5>
                  <span>
                    <Link href="/work/modernluxury-2" passHref>
                      <a className="more mt-30 do-detail">
                        อ่านต่อ <i className="fas fa-chevron-right"></i>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            {/* ศุภาลัยเอเลแกนซ์ บรม121 */}
            <div className="col-lg-4 col-md-6 items modernlux">
              <div className="item">
                <div className="img">
                  {/* <img src="/assets/img/blog/blog1.png" alt="" /> */}
                  <Image
                    src="/assets/img/works/modernluxury/03/01.png"
                    width={800}
                    height={637}
                  />
                </div>
                <div className="cont vis">
                  <span>ศุภาลัยเอเลแกนซ์</span>
                  <h5>บรม121</h5>
                  <span>
                    <Link href="/work/modernluxury-3" passHref>
                      <a className="more mt-30 do-detail">
                        อ่านต่อ <i className="fas fa-chevron-right"></i>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Modern Classic Luxury */}
            <div className="col-lg-4 col-md-6 items modernclassic">
              <div className="item">
                <div className="img">
                <Image
                    src="/assets/img/works/modernclassicluxury/01/01.png"
                    width={800}
                    height={637}
                  />
                </div>
                <div className="cont vis">
                  <span>บางกอกบูเลอวาร์ด</span>
                  <h5>เพชรเกษม-ปิ่นเกล้า</h5>
                  <span>
                    <Link href="/work/modernclassic-1" passHref>
                      <a className="more mt-30 do-detail">
                        อ่านต่อ <i className="fas fa-chevron-right"></i>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items modernclassic">
              <div className="item">
                <div className="img">
                <Image
                    src="/assets/img/works/modernclassicluxury/02/01.png"
                    width={800}
                    height={637}
                  />
                </div>
                <div className="cont vis">
                  <span>ลัดดารมย์ อิลิแกนซ์</span>
                  <h5>วงแหวน-สาทร</h5>
                  <span>
                    <Link href="/work/modernclassic-2" passHref>
                      <a className="more mt-30 do-detail">
                        อ่านต่อ <i className="fas fa-chevron-right"></i>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items modernclassic">
              <div className="item">
                <div className="img">
                <Image
                    src="/assets/img/works/modernclassicluxury/03/07.png"
                    width={800}
                    height={637}
                  />
                </div>
                <div className="cont vis">
                  <span>ภัสสร พุทธมณฑลสาย2</span>
                  <h5>บางแวก</h5>
                  <span>
                    <Link href="/work/modernclassic-3" passHref>
                      <a className="more mt-30 do-detail">
                        อ่านต่อ <i className="fas fa-chevron-right"></i>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Modern Loft */}
            <div className="col-lg-4 col-md-6 items modernloft">
              <div className="item">
                <div className="img">
                  <Image
                    src="/assets/img/works/modernloft/01/01.png"
                    width={800}
                    height={637}
                  />
                </div>
                <div className="cont vis">
                  <span>Infinite168Design</span>
                  <h5>สำนักงาน</h5>
                  <span>
                    <Link href="/work/modernloft-1" passHref>
                      <a className="more mt-30 do-detail">
                        อ่านต่อ <i className="fas fa-chevron-right"></i>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Modern Minimal */}
            <div className="col-lg-4 col-md-6 items modernminimal">
              <div className="item">
                <div className="img">
                <Image
                    src="/assets/img/works/modernminimal/01/01.jpg"
                    width={800}
                    height={637}
                  />
                </div>
                <div className="cont vis">
                  <span>บางกอกบูเลอวาร์ด</span>
                  <h5>รามอินทรา-เสรีไทย</h5>
                  <span>
                    <Link href="/work/modernminimal-1" passHref>
                      <a className="more mt-30 do-detail">
                        อ่านต่อ <i className="fas fa-chevron-right"></i>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            {/* The strand thonglor */}
            <div className="col-lg-4 col-md-6 items modernminimal">
              <div className="item">
                <div className="img">
                <Image
                    src="/assets/img/works/modernminimal/02/bg.png"
                    width={800}
                    height={637}
                  />
                </div>
                <div className="cont vis">
                  <span>The Strand</span>
                  <h5>ทองหล่อ</h5>
                  <span>
                    <Link href="/work/modernminimal-2" passHref>
                      <a className="more mt-30 do-detail">
                        อ่านต่อ <i className="fas fa-chevron-right"></i>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Modern Scandinavian */}
            <div className="col-lg-4 col-md-6 items">
              <div className="item">
                <div className="img">
                <Image
                    src="/assets/img/works/scandinavian/01.png"
                    width={800}
                    height={637}
                  />
                </div>
                <div className="cont vis">
                  <span>นันทวัน ปิ่นเกล้า</span>
                  <h5>กาญจนาภิเษก</h5>
                  <span>
                    <Link href="/work/scandinavian" passHref>
                      <a className="more mt-30 do-detail">
                        อ่านต่อ <i className="fas fa-chevron-right"></i>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WorkThreeColumn;
