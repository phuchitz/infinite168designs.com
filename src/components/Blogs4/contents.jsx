import React from "react";
import Link from "next/link";
function contents() {
  return (
    <>
      {/* ภัสสร พุทธมณฑลสาย2- บางแวก */}
      <div className="col-lg-4">
        <div className="item md-mb50">
          <div className="img">
            <img src="/assets/img/blog/blog1.png" alt="" />

            <div className="tag">
              <Link href="/blog-details">Branding</Link>
            </div>
          </div>
          <div className="cont">
            <div className="info">
              <h6>
                {/* By David Faber  */}
                <span className="main-color">21 July</span>
              </h6>
            </div>
            <h5>ภัสสร พุทธมณฑลสาย2- บางแวก</h5>
            <Link href="#">
              <a className="more">อ่านต่อ</a>
            </Link>
          </div>
        </div>
      </div>

      {/* บางกอกบูเลอวาร์ด รามอินทรา-เสรีไทย */}
      <div className="col-lg-4">
        <div className="item md-mb50">
          <div className="img">
            <img src="/assets/img/blog/blog2.jpg" alt="" />

            <div className="tag">
              <Link href="/blog-details">Branding</Link>
            </div>
          </div>
          <div className="cont">
            <div className="info">
              <h6>
                {/* By David Faber  */}
                <span className="main-color">8 June</span>
              </h6>
            </div>
            <h5>บางกอกบูเลอวาร์ด รามอินทรา-เสรีไทย</h5>
            <Link href="#">
              <a className="more">อ่านต่อ</a>
            </Link>
          </div>
        </div>
      </div>

      {/* นันทวัน ปิ่นเกล้า-กาญจนาภิเษก */}
      <div className="col-lg-4">
        <div className="item md-mb50">
          <div className="img">
            <img src="/assets/img/blog/blog3.png" alt="" />

            <div className="tag">
              <Link href="/blog-details">Branding</Link>
            </div>
          </div>
          <div className="cont">
            <div className="info">
              <h6>
                {/* By David Faber  */}
                <span className="main-color">26 June</span>
              </h6>
            </div>
            <h5>นันทวัน ปิ่นเกล้า-กาญจนาภิเษก</h5>
            <Link href="#">
              <a className="more">อ่านต่อ</a>
            </Link>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default contents;
