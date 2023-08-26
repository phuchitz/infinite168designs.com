import React from 'react'
import MainLayout from '../../../layouts/main'
import PageHeader from '../../../components/Page-header'

const index = ({ vis }) => {
  return (
    <MainLayout>
                <PageHeader
                    title="The Strand"
                    desc="ทองหล่อ"
                    fullPath={[
                        { id: 1, name: "หน้าแรก", url: "/" },
                        { id: 2, name: "ผลงาน", url: "/work/" },
                    ]}
                    image="/assets/img/works/modernminimal/02/bg.png"
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
                                        <img src="/assets/img/works/modernminimal/02/01.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>The Strand</span>
                                        <h5>ทองหล่อ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/02/02.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>The Strand</span>
                                        <h5>ทองหล่อ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/02/03.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>The Strand</span>
                                        <h5>ทองหล่อ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/02/04.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>The Strand</span>
                                        <h5>ทองหล่อ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/02/05.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>The Strand</span>
                                        <h5>ทองหล่อ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/02/06.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>The Strand</span>
                                        <h5>ทองหล่อ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/02/07.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>The Strand</span>
                                        <h5>ทองหล่อ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/02/08.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>The Strand</span>
                                        <h5>ทองหล่อ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/02/09.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>The Strand</span>
                                        <h5>ทองหล่อ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/02/10.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>The Strand</span>
                                        <h5>ทองหล่อ</h5>
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