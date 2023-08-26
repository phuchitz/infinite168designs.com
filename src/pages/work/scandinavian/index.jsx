import React from 'react'
import MainLayout from '../../../layouts/main'
import PageHeader from '../../../components/Page-header'

const index = ({ vis }) => {

    return (
        <MainLayout>
            <PageHeader
                title="นันทวัน ปิ่นเกล้า"
                desc="กาญจนาภิเษก"
                fullPath={[
                    { id: 1, name: "หน้าแรก", url: "/" },
                    { id: 2, name: "ผลงาน", url: "/work/" },
                ]}
                image="/assets/img/works/scandinavian/01.png"
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
                                    <img src="/assets/img/works/scandinavian/01.png" alt="" />
                                </div>
                                <div className={`cont ${vis ? "vis" : ""}`}>
                                    <span>นันทวัน ปิ่นเกล้า</span>
                                    <h5>กาญจนาภิเษก</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 items">
                            <div className="item">
                                <div className="img">
                                    <img src="/assets/img/works/scandinavian/02.png" alt="" />
                                </div>
                                <div className={`cont ${vis ? "vis" : ""}`}>
                                    <span>นันทวัน ปิ่นเกล้า</span>
                                    <h5>กาญจนาภิเษก</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 items">
                            <div className="item">
                                <div className="img">
                                    <img src="/assets/img/works/scandinavian/03.png" alt="" />
                                </div>
                                <div className={`cont ${vis ? "vis" : ""}`}>
                                    <span>นันทวัน ปิ่นเกล้า</span>
                                    <h5>กาญจนาภิเษก</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 items">
                            <div className="item">
                                <div className="img">
                                    <img src="/assets/img/works/scandinavian/04.png" alt="" />
                                </div>
                                <div className={`cont ${vis ? "vis" : ""}`}>
                                    <span>นันทวัน ปิ่นเกล้า</span>
                                    <h5>กาญจนาภิเษก</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 items">
                            <div className="item">
                                <div className="img">
                                    <img src="/assets/img/works/scandinavian/05.png" alt="" />
                                </div>
                                <div className={`cont ${vis ? "vis" : ""}`}>
                                    <span>นันทวัน ปิ่นเกล้า</span>
                                    <h5>กาญจนาภิเษก</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 items">
                            <div className="item">
                                <div className="img">
                                    <img src="/assets/img/works/scandinavian/06.png" alt="" />
                                </div>
                                <div className={`cont ${vis ? "vis" : ""}`}>
                                    <span>นันทวัน ปิ่นเกล้า</span>
                                    <h5>กาญจนาภิเษก</h5>
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