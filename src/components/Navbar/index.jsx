/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from '../../common/getSiblings'

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <Link href="/">
            <a className={`logo ${logoClass && logoClass}`}>
              <img src={appData.lightLogo} alt="logo" ref={logoRef} />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={handleMobileDropdown}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">หน้าแรก</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">เกี่ยวกับเรา</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/service">
                  <a className="nav-link">การบริการ</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/work">
                  <a className="nav-link">ผลงาน</a>
                </Link>
              </li>
              {/* <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  บริการของเรา
                </span>
                <div className="dropdown-menu">
                  <Link href="/work1">
                    <a className="dropdown-item">Two Column</a>
                  </Link>
                  <Link href="/work2">
                    <a className="dropdown-item">Three Column</a>
                  </Link>
                  <Link href="/work3">
                    <a className="dropdown-item">Four Column</a>
                  </Link>
                  <Link href="/project-details">
                    <a className="dropdown-item">Single Project</a>
                  </Link>
                </div>
              </li> */}
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">ติดต่อเรา</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
