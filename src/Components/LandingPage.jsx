import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import ArrowDown from "./ArrowDown";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className='flex justify-start items-center flex-col  w-full h-[calc(100vh-64px)] bg-[url("./bg2.jpg")] bg-cover'>
      <div className="flex  items-center flex-col pt-14">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='text-9xl font-["Oswald"] tracking-tighter uppercase'
        >
          Software Developer
        </motion.h1>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="border-b-1 border"
          ></motion.div>
          <div className="flex justify-between items-center gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="border-t-2 w-[40px]  border-white"
            ></motion.div>
            <motion.h1
              initial={{ opacity: 0,y:100 }}
              animate={{ opacity: 1,y:0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className='text-5xl font-["Schibsted_Grotesk"] tracking-tighter uppercase'
            >
              Full Stack Web Developer
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="border-t-2 w-[40px]  border-white"
            ></motion.div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <motion.p
          initial={{ opacity: 0,scale:1.2 }}
          whileInView={{ opacity: 1 ,scale:1}}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-[65%] text-center leading-2 font-[500] text-sm tracking-tight"
        >
          I am a freelancer based in Bengaluru, specializing in delivering
          high-quality full-stack projects using the MERN stack and Java. My
          expertise extends to UI design, SEO, and UI development, allowing me
          to create visually appealing and user-friendly interfaces that drive
          results. I am passionate about helping businesses grow by providing
          tailored digital solutions that meet their unique needs.
        </motion.p>
      </div>
      <div className="gap-8 flex mt-8 pl-4 justify-start w-[65%]">
        <motion.div
          initial={{ opacity: 0,scale:2 }}
          whileInView={{ opacity: 1 ,scale:1}}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center bg-transparent backdrop-blur-2xl border-[1px] rounded-full px-1 hover:bg-black hover:text-white overflow-hidden"
        >
          <button className=" px-3 py-2 bg-transparent backdrop-blur-2xl outline-none">
            Read More
          </button>
          <MdOutlineArrowOutward size={25} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 ,scale:2}}
          whileInView={{ opacity: 1 ,scale:1}}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center bg-transparent backdrop-blur-2xl border-[1px] rounded-full px-1"
        >
          <button className=" px-3 py-2  ">Contact</button>
          <IoMdContact size={25} />
        </motion.div>
      </div>
      <div className="arrowAnim">
        <ArrowDown />
      </div>
    </div>
  );
};

export default LandingPage;
