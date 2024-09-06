import React from "react";
import Projects from "../Components/Projects";
import { Poster } from "../Components/Poster";

export const WorkPage = () => {
  return (
    <div className="w-full min-h-screen h-fit px-[10vw] bg-[url('./workbg.jpg')]  bg-no-repeat bg-fixed bg-cover pt-14">
      <div className="dets">
        <h1 className='text-blue-500 text-7xl font-bold font-["Roboto_Condensed"]'>
          Work
        </h1>
        <div className="mt-8 rounded-lg overflow-hidden">
          <Projects />
        </div>
        <div className="poster mt-5 pb-4 rounded-xl overflow-hidden">
          <Poster />
        </div>
      </div>
    </div>
  );
};
