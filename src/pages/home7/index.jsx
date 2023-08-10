import React from "react";
import Team3 from "../../components/Team3";
import MainLayout from "../../layouts/main";
import Video from "../../components/Video";
import Intro3 from "../../components/Intro3";
import Blogs3 from "../../components/Blogs3";
import AboutUs8 from "../../components/About-Us8";
import Services5 from "../../components/Services5";
import Portfolio2 from "../../components/Portfolio2";
import Testimonials1 from "../../components/Testimonials1";
import WorkWithoutFilter from "../../components/Work-Without-Filter";
import IntroWithVertical2 from "../../components/Intro-with-vertical2";
import IntroWithHorizontal2 from "../../components/Intro-with-horizontal2";
import Intro from "../../components/Intro-Background"

const Home7 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  });
  return (
    <MainLayout>
      <IntroWithHorizontal2 />
      {/* <Intro /> */}
      <AboutUs8 />
      <Services5 />
      <Portfolio2 />
      {/* <WorkWithoutFilter /> */}
      <div className="hr-container">
        <div className="hr-border-top"></div>
        <div className="hr-border-bottom"></div>
      </div>
      <Video />
      {/* <Team3 /> */}
      {/* <Testimonials1 bigTitle /> */}
      {/* <Blogs3 smallTitle /> */}
    </MainLayout>
  );
};

export default Home7;
