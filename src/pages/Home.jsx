import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import TackStack from "../sections/TackStack";
import ProjectSection from "../sections/ProjectSection";
import Review from "../sections/Review";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <TackStack />
      <About />
      <ProjectSection spliceValue={2} />
      <Review />
      <Contact />
    </>
  );
};

export default Home;
