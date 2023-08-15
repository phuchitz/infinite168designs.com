import React from "react";
import Link from "next/link";
function contents() {
  return (
    <>
      {/* ภัสสร พุทธมณฑลสาย2- บางแวก */}
      <div className="col-lg-4">
        <div className="item md-mb50">
          <div className="img">
            <img src="/assets/img/blog/mainThebest2023.png" alt="" />

            {/* <div className="tag"> */}
              {/* <Link href="#">CLASSIC</Link> */}
              {/* <div className="text-white">CLASSIC</div> */}
            {/* </div> */}
          </div>
          <div className="cont">
            <div className="info">
              {/* <h6> */}
                {/* By David Faber  */}
                {/* <span className="main-color">21 July</span> */}
              {/* </h6> */}
            </div>
            <h5>
              สไตล์ยอดนิยม 2023 
              {/* modernluxury   */}
              {/* <div>
                STYLE <b className="main-color">CLASSIC</b>
              </div> */}
            </h5>
            <Link href="/blog-thebest2023">
              <a className="more main-color">อ่านต่อ<i className="fa-solid fa-angle-right"></i></a>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="col-lg-4">
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
                By David Faber 
                <span className="main-color">21 July</span>
              </h6>
            </div>
            <h5>สไตล์ยอดนิยมตลอดกาล</h5>
            modern classic
            <Link href="#">
              <a className="more main-color">อ่านต่อ<i className="fa-solid fa-angle-right"></i></a>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default contents;
