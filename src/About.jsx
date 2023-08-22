import React from "react";
import Common from "./Common";
import Aboimg from "../src/images/about.png";

const About = () => {
  return (
    <>
      <Common
        Image={Aboimg}
        heading="Welcome To About Page"
        button="Contect Now"
        path="/contect"
      />
    </>
  );
};

export default About;
