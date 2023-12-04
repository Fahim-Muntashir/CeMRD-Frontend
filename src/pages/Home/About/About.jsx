import React from "react";
import Header from "../../../components/shared/Header";
import FirstAt from "../../../components/about/FirstAt";
import Statistic from "../../../components/about/Statistic";
import { AboutUs } from "../../../components/about/AboutUs";
import Accivement from "../../../components/about/Accivement";

const About = () => {
  return (
    <div>
      <Header></Header>
      <FirstAt></FirstAt>
      <Statistic></Statistic>
      <AboutUs></AboutUs>
      <Accivement></Accivement>
    </div>
  );
};

export default About;
