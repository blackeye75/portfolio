import React from "react";
import { IoCodeSlashSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-black flex items-center justify-center  p-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-1 items-center gap-3 justify-center"
      >
        <IoCodeSlashSharp
          size={25}
          className="hover:scale-105 duration-300 hover:text-blue-500"
        />
        <h1 className="text-l font-['Roboto'] font-[300] hover:underline">
          Copyright @2024-Priyanshu Raj
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex-1 justify-center flex font-['Sevillana'] text-xl"
      >
        Freelancing
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-1 justify-center gap-7 font-['Roboto_Condensed']"
      >
        <a
          className="font-light capitalize  text-white hover:text-slate-300"
          href=""
        >
          Side Projects
        </a>
        <a
          className="font-light capitalize  text-white hover:text-slate-300"
          href=""
        >
          Contact
        </a>
        <a
          className="font-light capitalize  text-white hover:text-slate-300"
          href=""
        >
          Resume
        </a>
      </motion.div>
    </div>
  );
};

export default Footer;
