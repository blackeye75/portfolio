import React from "react";
import Model from "./3d model/Model";
import { motion } from "framer-motion";

const ThreeElem = () => {
  return (
    <div className='w-full h-[100vh] bg-[url("/bg.jpg")] bg-cover'>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='sm:text-7xl text-5xl font-["Oswald"] uppercase text-center pt-5'
      >
        Shaping Ideas into Reality
      </motion.h1>
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: .2 }}
      >
        <Model />
      </motion.div>
    </div>
  );
};

export default ThreeElem;
