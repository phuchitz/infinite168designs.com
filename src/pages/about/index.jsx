import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="About us"
        fullPath={[
          { id: 1, name: "หน้าแรก", url: "/" },
          { id: 2, name: "เกี่ยวกับเรา", url: "/about" },
        ]}
        image="/assets/img/NewBro.png"
      />
      <AboutUs4 />
      {/* <Services3 bigTitle grid /> */}
      {/* <Testimonials1 bigTitle /> */}
      {/* <Team2 /> */}
      {/* <Skills2 /> */}
    </MainLayout>
  );
};

export default About;
