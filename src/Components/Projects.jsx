import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="w-full min-h-full h-fit  bg-gradient-to-l from-zinc-800 pb-6 to-zinc-950 flex flex-col items-center justify-center">
      <div className="w-full min-h-full h-fit flex items-center flex-col space-y-10">
        <div className="flex ">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="my-5    text-5xl uppercase font-semibold font-[Oswald]"
          >
            Projects
          </motion.h1>
        </div>

        {/* 1st */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
          className=" hover:scale-105 duration-300 w-[65%] h-[30vh] flex  border-[.5px] bg-[#121212] rounded-xl overflow-hidden border-zinc-700 "
        >
          <div className=" text w-[50%] h-full pt-8 p-3  text-white ">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl tracking-tight font-['Oswald'] leading-[5vw]"
            >
              Function Junction
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl leading-[1] font-['Roboto'] tracking-tight"
            >
              Event Managment Booking Platform{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-l font-['Roboto'] tracking-tight uppercase "
            >
              React Js, Appwrite
            </motion.p>
          </div>
          <div className="img p-7 w-[50%] flex items-center h-full bg-blue-500 ">
            <img src="./fnj.png" className="rounded-md bg-cover bg-center"  alt="" />
          </div>
        </motion.div>

        {/* 2nd */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="hover:scale-105 duration-300 w-[65%] h-[30vh] flex  border-[.5px] bg-[#121212] border-zinc-700 rounded-xl overflow-hidden"
        >
          <div className="text w-[50%] h-full pt-5 p-3  text-white">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-5xl tracking-tight font-['Oswald'] leading-[5vw]"
            >
              DBlog
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-2xl leading-[1] font-['Roboto'] tracking-tight"
            >
              Blog CURD And File Handleing{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-l font-['Roboto'] tracking-tight uppercase "
            >
              React Js, Appwrite
            </motion.p>
            <button className="px-5  py-1 bg-blue-950 rounded-lg mt-2" >Visit</button>
          </div>
          <div className="img w-[50%] flex items-center h-full bg-pink-500 p-7 ">
            <img src="./dblog.png" className="rounded-md" alt="" />
          </div>
        </motion.div>

        {/* 3rd */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="hover:scale-105 duration-300 w-[65%] h-[30vh] flex  border-[.5px] bg-[#121212] border-zinc-700 rounded-xl overflow-hidden"
        >
          <div className="text w-[50%] h-full pt-8 p-3  text-white">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-5xl tracking-tight font-['Oswald'] leading-[5vw]"
            >
              JustRent
            </motion.h1>
            <motion.h1
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-2xl leading-[1] font-['Roboto'] tracking-tight"
            >
              Rent and Buy Properties{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-s font-['Roboto'] tracking-tight uppercase "
            >
              MERN Stack,Cloudinary
            </motion.p>
          </div>
          <div className="img w-[50%] h-full p-7 bg-red-500">
            <img src="./justrent.png" alt="" className="rounded-md bg-bottom bg-contain" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
