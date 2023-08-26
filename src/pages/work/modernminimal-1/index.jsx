import React from 'react'
import MainLayout from '../../../layouts/main'
import PageHeader from '../../../components/Page-header'

const index = ({ vis }) => {
  return (
    <MainLayout>
                <PageHeader
                    title="บางกอกบูเลอวาร์ด"
                    desc="รามอินทรา-เสรีไทย"
                    fullPath={[
                        { id: 1, name: "หน้าแรก", url: "/" },
                        { id: 2, name: "ผลงาน", url: "/work/" },
                    ]}
                    image="/assets/img/works/modernminimal/01/01.jpg"
                />
                <section className="works section-padding">
                    <div className="container">
                        <div className="row header-container-work">
                            <div className="header-work">
                                <h5>
                                    By Infinite168design.
                                </h5>
                            </div>
                        </div>
                        <div className="row gallery">
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/01/01.jpg" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>บางกอกบูเลอวาร์ด</span>
                                        <h5>รามอินทรา-เสรีไทย</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/01/02.jpg" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>บางกอกบูเลอวาร์ด</span>
                                        <h5>รามอินทรา-เสรีไทย</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/01/03.jpg" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>บางกอกบูเลอวาร์ด</span>
                                        <h5>รามอินทรา-เสรีไทย</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
  )
}

export default index