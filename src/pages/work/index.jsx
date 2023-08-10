import React from "react";
import MainLayout from "../../layouts/main";
import WorkHeader from "../../components/Work-header";
import Portfolio2 from "../../components/Portfolio2";
import WorkThreeColumn from "../../components/Work-Three-Column";
import PageHeaderNew from "../../components/Page-header/New";

function index() {
  return (
    <>
      <MainLayout>
      <PageHeaderNew
        title="Works"
        fullPath={[
          { id: 1, name: "หน้าแรก", url: "/" },
          { id: 2, name: "ผลงาน", url: "/work" },
        ]}
        image="/assets/img/works/bg.jpg"
      />
        {/* <WorkHeader
          title={{
            first: "Design Works",
            //second: "Design Works"
            //second: "By Infinfinite168design",
          }}
          //title = "text"
          // content="Design Works"
        /> */}
        <WorkThreeColumn />
      </MainLayout>
    </>
  );
}

export default index;
