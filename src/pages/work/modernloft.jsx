import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import initIsotope from "../../common/initIsotope";

const Modernloft = ({ vis }) => {
    React.useEffect(() => {
        setTimeout(() => {
            if (window.Isotope) initIsotope();
        }, 1000);
    }, []);
    return (
        <>
            <MainLayout>
                <PageHeader
                    title="Modern Loft"
                    fullPath={[
                        { id: 1, name: "home", url: "/" },
                        { id: 2, name: "work", url: "/work/" },
                        { id: 3, name: "modernloft", url: "/work/modernloft" }
                    ]}
                    image="/assets/img/works/modernloft/bg.png"
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
                                        <img src="/assets/img/works/modernloft/01.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>Infinite168Design</span>
                                        <h5>สำนักงาน</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernloft/02.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>Infinite168Design</span>
                                        <h5>สำนักงาน</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernloft/03.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>Infinite168Design</span>
                                        <h5>สำนักงาน</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernloft/04.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>Infinite168Design</span>
                                        <h5>สำนักงาน</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernloft/05.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>Infinite168Design</span>
                                        <h5>สำนักงาน</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernloft/06.png" alt="" />
                                    </div>
                                    <div className={`cont ${vis ? "vis" : ""}`}>
                                        <span>Infinite168Design</span>
                                        <h5>สำนักงาน</h5>
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

export default Modernloft