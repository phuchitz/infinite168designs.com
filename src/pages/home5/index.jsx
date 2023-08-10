import React from "react";
import Video from "../../components/Video";
import MainLayout from "../../layouts/main";
import AboutUs6 from "../../components/About-Us6";
import Services5 from "../../components/Services5";
import Portfolio2 from "../../components/Portfolio2";
import IntroWithHorizontal2 from "../../components/Intro-with-horizontal2";

const Home5 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      {/* <Intro4 /> */}
      <IntroWithHorizontal2/>
      <Services5 bigTitle grid />
      <Portfolio2 />
      <AboutUs6 />
      <Video />
      {/* <Team2 />
      <Testimonials1 bigTitle /> */}
      {/* <Blogs4 /> */}
    </MainLayout>
  );
};

export default Home5;
