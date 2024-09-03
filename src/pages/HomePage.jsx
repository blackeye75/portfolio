import React from "react";
import LandingPage from "../Components/LandingPage";
import ThreeElem from "../Components/ThreeElem";
import Marque from "../Components/Marque";
import Projects from "../Components/Projects";
import { Poster } from "../Components/Poster";

const HomePage = () => {
  return (
    <div className="w-full h-screen">
      <LandingPage />
      {/* <ThreeElem /> */}
      <Marque />
      <Projects />

      <Poster />
    </div>
  );
};

export default HomePage;
