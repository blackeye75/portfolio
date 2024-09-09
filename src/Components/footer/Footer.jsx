// import React from "react";
// import { IoCodeSlashSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <div className="w-full h-fit bg-black flex items-center justify-center  p-4">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="flex flex-1 items-center gap-3 justify-center"
//       >
//         <IoCodeSlashSharp
//           size={25}
//           className="hover:scale-105 duration-300 hover:text-blue-500"
//         />
//         <h1 className="text-l font-['Roboto'] font-[300] hover:underline">
//           Copyright @2024-Priyanshu Raj
//         </h1>
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="flex-1 justify-center flex font-['Sevillana'] text-xl"
//       >
//         Freelancing
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="flex flex-1 justify-center gap-7 font-['Roboto_Condensed']"
//       >
//         <a
//           className="font-light capitalize  text-white hover:text-slate-300"
//           href=""
//         >
//           Side Projects
//         </a>
//         <a
//           className="font-light capitalize  text-white hover:text-slate-300"
//           href=""
//         >
//           Contact
//         </a>
//         <a
//           className="font-light capitalize  text-white hover:text-slate-300"
//           href=""
//         >
//           Resume
//         </a>
//       </motion.div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { IoCodeSlashSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-black flex flex-col sm:flex-row items-center justify-center p-4">
      {/* Left section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex items-center gap-3 justify-center sm:justify-start flex-1 mb-4 sm:mb-0"
      >
        <IoCodeSlashSharp
          size={25}
          className="hover:scale-105 duration-300 hover:text-blue-500"
        />
        <h1 className="text-sm sm:text-lg font-['Roboto'] font-[300] hover:underline text-white">
          Copyright © 2024 - Priyanshu Raj
        </h1>
      </motion.div>

      {/* Middle section */}
      <Link to="/">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center sm:justify-center flex-1 text-center font-['Sevillana'] text-lg sm:text-xl mb-4 sm:mb-0 text-white"
        >
          Freelancing
        </motion.div>
      </Link>

      {/* Right section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-center sm:justify-end flex-1 gap-5 sm:gap-7 font-['Roboto_Condensed'] text-sm sm:text-base"
      >
        <Link
          className="font-light capitalize text-white hover:text-slate-300"
          to="https://github.com/blackeye75/"
        >
          Side Projects
        </Link>
        <Link
          className="font-light capitalize text-white hover:text-slate-300"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="font-light capitalize text-white hover:text-slate-300"
          to="https://drive.google.com/file/d/1t_Zt-7vAi_bMzaCvxrHPMGJiwP4xEfKD/view?usp=drive_link"
        >
          Resume
        </Link>
      </motion.div>
    </div>
  );
};

export default Footer;
