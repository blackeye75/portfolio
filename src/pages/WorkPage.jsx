import React from "react";
import Projects from "../Components/Projects";
import { Poster } from "../Components/Poster";
import { easeInOut, motion } from "framer-motion";

export const WorkPage = () => {
  return (
    <div className="w-full min-h-screen h-fit px-[10vw] bg-[url('/workbg.jpg')]  bg-no-repeat bg-fixed bg-cover pt-14">
      <div className="dets">
        <motion.h1
          initial={{ x: -100, opacity: 0, scale: 0 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 3, delay: 0.2, ease: easeInOut }}
          className='text-blue-500 text-7xl font-bold font-["Roboto_Condensed"]'
        >
          Work
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="mt-8 rounded-lg overflow-hidden"
        >
          <Projects />
        </motion.div>
        <div className="poster mt-5 pb-4 rounded-xl overflow-hidden">
          <Poster />
        </div>
      </div>
    </div>
  );
};
