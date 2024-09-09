// import React from "react";
// import { motion } from "framer-motion";
// import { MdOutlineArrowOutward } from "react-icons/md";

// const Projects = () => {
//   return (
//     <div className="w-full min-h-full h-fit  bg-gradient-to-l from-zinc-800 pb-6 to-zinc-950 flex flex-col items-center justify-center">
//       <div className="w-full min-h-full h-fit px-0 sm:px-4 flex items-center flex-col space-y-10">
//         <div className="flex ">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="my-5    text-5xl uppercase font-semibold font-[Oswald]"
//           >
//             Projects
//           </motion.h1>
//         </div>

//         {/* 1st */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 2, delay: 0.8 }}
//           className=" hover:scale-105 duration-300 sm:w-[65%] w-full h-[30vh] flex  border-[.5px] bg-[#121212] rounded-xl overflow-hidden border-zinc-700 "
//         >
//           <div className=" text w-[50%] h-full pt-5 p-3  text-white ">
//             <motion.h1
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="text-5xl tracking-tight font-['Oswald'] leading-[5vw]"
//             >
//               Function Junction
//             </motion.h1>
//             <motion.h1
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="text-2xl leading-[1] font-['Roboto'] tracking-tight"
//             >
//               Event Managment Booking Platform{" "}
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="text-xs font-['Roboto_Condensed'] font-light tracking-tight uppercase "
//             >
//               React Js, Appwrite
//             </motion.p>
//             <div className="flex gap-2 items-center bg-blue-500 rounded-md w-[21%]  h-[35px] mt-1 hover:bg-blue-700 duration-300">
//               <button className=" font-[500] text-lg px-3  text-black font-['Roboto_Condensed'] mt-2">
//                 Visit
//               </button>
//               <MdOutlineArrowOutward size={28} className="" />
//             </div>
//           </div>
//           <div className="img p-7 w-[50%]  h-full bg-blue-500 ">
//             <img
//               src="./fnj.png"
//               className="rounded-md bg-cover bg-center"
//               alt=""
//             />
//           </div>
//         </motion.div>

//         {/* 2nd */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 2, delay: 0.8 }}
//           className="hover:scale-105 duration-300 w-[65%] h-[30vh] flex  border-[.5px] bg-[#121212] border-zinc-700 rounded-xl overflow-hidden"
//         >
//           <div className="text w-[50%] h-full pt-5 p-3  text-white">
//             <motion.h1
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               className="text-5xl tracking-tight font-['Oswald'] leading-[5vw]"
//             >
//               DBlog
//             </motion.h1>
//             <motion.h1
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               className="text-2xl leading-[1] font-['Roboto'] tracking-tight"
//             >
//               Blog CURD And File Handleing{" "}
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               className="text-xs font-['Roboto_Condensed'] font-light tracking-tight uppercase "
//             >
//               React Js, Appwrite
//             </motion.p>
//             <div className="flex gap-2 items-center bg-pink-500 rounded-md w-[21%]  h-[32px] mt-1 hover:bg-pink-700 duration-300 justify-center">
//               <button className=" font-[500] text-lg px-3   text-black font-['Roboto_Condensed'] mt-2">
//                 Visit
//               </button>
//               <MdOutlineArrowOutward size={28} className="" />
//             </div>
//           </div>
//           <div className="img w-[50%]  h-full bg-pink-500 p-8  ">
//             <img src="./dblog.png" className="rounded-md" alt="" />
//           </div>
//         </motion.div>

//         {/* 3rd */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 2, delay: 0.8 }}
//           className="hover:scale-105 duration-300 w-[65%] h-[30vh] flex  border-[.5px] bg-[#121212] border-zinc-700 rounded-xl overflow-hidden"
//         >
//           <div className="text w-[50%] h-full pt-8 p-3  text-white">
//             <motion.h1
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               className="text-5xl tracking-tight font-['Oswald'] leading-[5vw]"
//             >
//               JustRent
//             </motion.h1>
//             <motion.h1
//               whileInView={{ opacity: 1 }}
//               initial={{ opacity: 0 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               className="text-2xl leading-[1] font-['Roboto'] tracking-tight"
//             >
//               Rent and Buy Properties{" "}
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               className="text-xs font-['Roboto_Condensed'] font-light tracking-tight uppercase "
//             >
//               MERN Stack,Cloudinary
//             </motion.p>
//             <div className="flex gap-2 items-center bg-red-500 rounded-md w-[21%]  h-[35px] mt-1 hover:bg-red-700 duration-300">
//               <button className=" font-[500] text-lg px-3  text-black font-['Roboto_Condensed'] mt-2">
//                 Visit
//               </button>
//               <MdOutlineArrowOutward size={28} className="" />
//             </div>
//           </div>
//           <div className="img w-[50%] h-full p-7 bg-red-500">
//             <img src="./justrent.png" alt="" className="rounded-md " />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <div className="w-full min-h-full h-fit bg-gradient-to-l from-zinc-800 pb-6 to-zinc-950 flex flex-col items-center justify-center">
      <div className="w-full min-h-full h-fit px-2 sm:px-4 flex items-center flex-col space-y-10">
        <div className="flex">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="my-5 text-4xl sm:text-5xl uppercase font-semibold font-[Oswald]"
          >
            Projects
          </motion.h1>
        </div>

        {/* 1st */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="hover:scale-105 duration-300 w-full sm:w-[65%] h-[30vh] sm:h-[35vh] flex flex-col sm:flex-row border-[.5px] bg-[#121212] rounded-xl overflow-hidden border-zinc-700"
        >
          <div className="text w-full sm:w-[50%] sm:space-y-0 space-y-1 h-full pt-5 p-3 text-white">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl sm:text-5xl tracking-tight font-['Oswald'] leading-[6vw]"
            >
              Function Junction
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg sm:text-2xl leading-[1] font-['Roboto'] tracking-tight"
            >
              Event Management Booking Platform{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xs font-['Roboto_Condensed'] font-light tracking-tight uppercase"
            >
              React Js, Appwrite
            </motion.p>
            <div className="flex gap-2 items-center bg-blue-500 rounded-md w-[30%] sm:w-[21%] h-[35px] mt-2 hover:bg-blue-700 duration-300">
              <button className="font-[500] text-md sm:text-lg px-3 text-black font-['Roboto_Condensed']">
                Visit
              </button>
              <MdOutlineArrowOutward size={28} />
            </div>
          </div>
          <div className="img w-full sm:w-[50%] h-[25vh] sm:h-full bg-blue-500 p-3 sm:p-7">
            <img
              src="./fnj.png"
              className="rounded-md object-cover w-full h-full"
              alt=""
            />
          </div>
        </motion.div>

        {/* 2nd */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="hover:scale-105 duration-300 w-full sm:w-[65%] h-[30vh] sm:h-[35vh] flex flex-col sm:flex-row border-[.5px] bg-[#121212] border-zinc-700 rounded-xl overflow-hidden"
        >
          <div className="text w-full sm:w-[50%] sm:space-y-0 space-y-1 h-full pt-5 p-3 text-white">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-3xl sm:text-5xl tracking-tight font-['Oswald'] leading-[6vw]"
            >
              DBlog
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-lg sm:text-2xl leading-[1] font-['Roboto'] tracking-tight"
            >
              Blog CRUD And File Handling{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-xs font-['Roboto_Condensed'] font-light tracking-tight uppercase"
            >
              React Js, Appwrite
            </motion.p>
            <div className="flex gap-2 items-center bg-pink-500 rounded-md w-[30%] sm:w-[21%] h-[32px] mt-2 hover:bg-pink-700 duration-300 justify-center">
              <button className="font-[500] text-md sm:text-lg px-3 text-black font-['Roboto_Condensed']">
                Visit
              </button>
              <MdOutlineArrowOutward size={28} />
            </div>
          </div>
          <div className="img w-full sm:w-[50%] h-[25vh] sm:h-full bg-pink-500 p-3 sm:p-7">
            <img
              src="./dblog.png"
              className="rounded-md object-cover w-full h-full"
              alt=""
            />
          </div>
        </motion.div>

        {/* 3rd */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="hover:scale-105 duration-300 w-full sm:w-[65%] h-[30vh] sm:h-[35vh] flex flex-col sm:flex-row border-[.5px] bg-[#121212] border-zinc-700 rounded-xl overflow-hidden"
        >
          <div className="text w-full sm:w-[50%] sm:space-y-0 space-y-1 h-full pt-8 p-3 text-white">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-3xl sm:text-5xl tracking-tight font-['Oswald'] leading-[6vw]"
            >
              JustRent
            </motion.h1>
            <motion.h1
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-lg sm:text-2xl leading-[1] font-['Roboto'] tracking-tight"
            >
              Rent and Buy Properties{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-xs font-['Roboto_Condensed'] font-light tracking-tight uppercase"
            >
              MERN Stack, Cloudinary
            </motion.p>
            <div className="flex gap-2 items-center bg-red-500 rounded-md w-[30%] sm:w-[21%] h-[35px] mt-2 hover:bg-red-700 duration-300">
              <button className="font-[500] text-md sm:text-lg px-3 text-black font-['Roboto_Condensed']">
                Visit
              </button>
              <MdOutlineArrowOutward size={28} />
            </div>
          </div>
          <div className="img w-full sm:w-[50%] h-[25vh] sm:h-full bg-red-500 p-3 sm:p-7">
            <img
              src="./justrent.png"
              className="rounded-md object-cover w-full h-full"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
