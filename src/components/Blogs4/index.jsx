/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Contents from "./contents";

const Blogs4 = () => {
  return (
    <section className="cls-blog section-padding position-re">
      <div className="container">
        <div className="main-header text-center">
          <h3>Interesting articles.</h3>
          <div className="tex-bg">Blog</div>
        </div>
        <div className="row">
          <Contents/>
        </div>
      </div>
    </section>
  );
};

export default Blogs4;
