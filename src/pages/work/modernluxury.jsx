import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import initIsotope from "../../common/initIsotope";

const Modernluxury = ({ vis }) => {
    React.useEffect(() => {
        setTimeout(() => {
            if (window.Isotope) initIsotope();
        }, 1000);
    }, []);
    return (
        <>
            <MainLayout>
                <PageHeader
                    title="Modern Luxury"
                    fullPath={[
                        { id: 1, name: "home", url: "/" },
                        { id: 2, name: "work", url: "/work/" },
                        { id: 3, name: "modernluxury", url: "/work/modernluxury" }
                    ]}
                    image="/assets/img/works/modernluxury/bg.png"
                />
                <section className="works section-padding">
                    <div className="container">
                        <div className="row gallery">
                            <div className="col-md-6 items mt-0">
                                <div className="main-header mb-0">
                                    <h5>By Infinite168design.</h5 >
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernluxury/01.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>บางกอกบูเลอวาร์ด</span>
                                        <h5>ดอนเมือง แจ้งวัฒนะ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernluxury/02.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>บางกอกบูเลอวาร์ด</span>
                                        <h5>ดอนเมือง แจ้งวัฒนะ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernluxury/03.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>บางกอกบูเลอวาร์ด</span>
                                        <h5>ดอนเมือง แจ้งวัฒนะ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernluxury/04.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>บางกอกบูเลอวาร์ด</span>
                                        <h5>ดอนเมือง แจ้งวัฒนะ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernluxury/05.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>บางกอกบูเลอวาร์ด</span>
                                        <h5>ดอนเมือง แจ้งวัฒนะ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernluxury/06.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>บางกอกบูเลอวาร์ด</span>
                                        <h5>ดอนเมือง แจ้งวัฒนะ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernluxury/07.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>บางกอกบูเลอวาร์ด</span>
                                        <h5>ดอนเมือง แจ้งวัฒนะ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernluxury/08.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>บางกอกบูเลอวาร์ด</span>
                                        <h5>ดอนเมือง แจ้งวัฒนะ</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernluxury/09.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>บางกอกบูเลอวาร์ด</span>
                                        <h5>ดอนเมือง แจ้งวัฒนะ</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}

export default Modernluxury