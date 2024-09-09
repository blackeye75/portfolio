import React from "react";
import { easeInOut, motion } from "framer-motion";

const SkillCard = ({ icon, title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: easeInOut }}
      className="bg-black hover:scale-110 duration-300 border-[.5px] border-zinc-700 hover:bg-zinc-800 text-white p-1 rounded-lg shadow-md flex items-center j  sm:w-48 sm:h-14 w-40 gap-1"
    >
      <div className=" ">{icon}</div>
      <div className="">
        {" "}
        <h3 className="leading-none text-lg font-bold font-['oswald']">
          {title}
        </h3>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
