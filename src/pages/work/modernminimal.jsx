import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'

function Modernminimal() {
    return (
        <>
            <MainLayout>
                <PageHeader
                    title="Modern Minimal"
                    fullPath={[
                        { id: 1, name: "home", url: "/" },
                        { id: 2, name: "work", url: "/work/" },
                        { id: 3, name: "modernminimal", url: "/work/modernminimal" }
                    ]}
                    image="/assets/img/works/modernminimal/bg.jpg"
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
                                        <img src="/assets/img/works/modernminimal/01.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/02.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 items">
                                <div className="item">
                                    <div className="img">
                                        <img src="/assets/img/works/modernminimal/03.jpg" alt="" />
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

export default Modernminimal