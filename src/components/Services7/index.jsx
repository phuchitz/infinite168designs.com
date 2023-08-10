import React from "react";

const Services7 = () => {
  return (
    <section className="services section-padding pb-0" >
      <div className="container">
        <div className="section-head">
          <h3 className="font-thai">การบริการ</h3>
        </div>
        <div className="row font-thai">
          <div className="col-lg-2">
            <div className="item md-mb50">
              <span className="icon flaticon-interior-design"></span>
              <h6>งานเขียนแบบก่อสร้างเฟอร์นิเจอร์</h6>
              {/* <p>
                แบบก่อสร้างงานสถาปัตยกรรมภายใน (interior architectural working drawing) เขียนขึ้นโดยมีจุดประสงค์เพื่อให้สามารถนำไปใช้เป็นแนวทางในการก่อสร้าง
              </p> */}  
            </div>
          </div>
          <div className="col-lg-2">
            <div className="item md-mb50">
              <span className="icon flaticon-furniture"></span>
              <h6>งานบิ้วอินเฟอร์นิเจอร์</h6>
              {/* <p>
                At vero eos et accusamus et iusto odio dignis simos ducimus qui
                blanditiis praesnti um voluptatum deleniti
              </p> */}
            </div>
          </div>
          <div className="col-lg-2">
            <div className="item md-mb50">
              <span className="icon flaticon-computer"></span>
              <h6>งานออกแบบภาพ 3มิติ (3D) </h6>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="item md-mb50">
              <span className="icon flaticon-renovation"></span>
              <h6>งานรีโนเวท</h6>
              
            </div>
          </div>
          <div className="col-lg-2">
            <div className="item md-mb50">
              <span className="icon flaticon-sketch"></span>
              <h6>งานประเมินราคางานตกแต่างภายใน</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services7;
