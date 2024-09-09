// import TextInput from "../Components/TextInput";
// import React from "react";
// import { Poster } from "../Components/Poster";
// import { motion } from "framer-motion";

// const variants = {
//   initial: {
//     y: 500,
//     opacity: 0,
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const ContactPage = () => {
//   return (
//     <div className="w-screen min-h-screen h-fit px-[10vw] bg-[url('./workbg.jpg')]  bg-no-repeat bg-fixed bg-cover pt-14">
//       <motion.h1
//         initial={{ opacity: 0 }}
//         whileInView={{  opacity: 1 }}
//         transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
//         className="text-blue-500 text-7xl font-bold font-['Roboto_Condensed']"
//       >
//         Contact
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
//         className= "text-lg sm:text-sm font-['Space_Grotesk'] text-zinc-400 "
//       >
//         Please fill out the following form and we will get back to you within
//         the next 24 hours to help you become even greater at what you do.
//       </motion.p>
//       <form className="msg ">
//         <div className="name flex sm:flex-row flex-col">
//           <div className="dets flex-1 flex flex-col  p-4">
//             <motion.h1
//               initial={{ opacity: 0}}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.1 }}
//               className="p-2 w-[7%] rounded-full text-center font-['Space_Grotesk'] bg-zinc-600 "
//             >
//               1
//             </motion.h1>
//             <motion.h1
//               initial={{ x: 100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 0.1 }}
//               className="text-4xl font-['Space_Grotesk'] mt-2 "
//             >
//               What Is Your Name ?
//             </motion.h1>
//             <motion.h3
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
//               className="text-xs font-[Roboto_Condensed] text-red-500"
//             >
//               Required
//             </motion.h3>
//           </div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 1 }}
//             className="field  flex-1 flex items-center justify-center "
//           >
//             {/* field */}
//             <TextInput label="Your Sweet Name" />
//           </motion.div>
//         </div>
//         <div className="email flex">
//           <div className="dets flex-1 flex flex-col  p-4 ">
//             <motion.h1
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.1 }}
//               className="p-2 w-[7%] rounded-full text-center font-['Space_Grotesk'] bg-zinc-600 "
//             >
//               2
//             </motion.h1>
//             <motion.h1
//               initial={{ x: 100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 0.1 }}
//               className="text-4xl font-['Space_Grotesk'] mt-2 "
//             >
//               What is your email address?
//             </motion.h1>
//             <motion.h3
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
//               className="text-xs font-[Roboto_Condensed] text-red-500"
//             >
//               Required
//             </motion.h3>
//           </div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 1 }}
//             className="field  flex-1 flex items-center justify-center "
//           >
//             {/* field */}
//             <TextInput label="Email Adderress" />
//           </motion.div>
//         </div>
//         <div className="query flex">
//           <div className="dets flex-1 flex flex-col  p-4">
//             <motion.h1
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.1 }}
//               className="p-2 w-[7%] rounded-full text-center font-['Space_Grotesk'] bg-zinc-600 "
//             >
//               3
//             </motion.h1>
//             <motion.h1
//               initial={{ x: 100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 0.1 }}
//               className="text-4xl font-['Space_Grotesk'] mt-2 leading-[2vw]"
//             >
//               Can you tell me about your project / product / company in a few
//               words?
//             </motion.h1>
//             <motion.h3
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
//               className="text-xs font-[Roboto_Condensed] text-red-500"
//             >
//               Required
//             </motion.h3>
//           </div>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 1 }}
//             className="field  flex-1 flex items-center justify-center "
//           >
//             {/* field */}
//             <TextInput label="Query" />
//           </motion.div>
//         </div>
//         <motion.button
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
//           className="px-4 py-1 text-xl font-['Roboto_Condensed'] bg-blue-500 rounded-lg ml-4"
//         >
//           Send
//         </motion.button>
//       </form>
//       <div className=" rounded-lg overflow-hidden mt-10">
//         <Poster />
//       </div>
//     </div>
//   );
// };

// export default ContactPage;



import TextInput from "../Components/TextInput";
import React from "react";
import { Poster } from "../Components/Poster";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const ContactPage = () => {
  return (
    <div className="w-screen min-h-screen h-fit px-4 sm:px-[10vw] bg-[url('./workbg.jpg')] bg-no-repeat bg-fixed bg-cover pt-14">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
        className="text-blue-500 text-4xl sm:text-5xl lg:text-7xl font-bold font-['Roboto_Condensed'] mb-4"
      >
        Contact
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
        className="text-base sm:text-lg lg:text-xl font-['Space_Grotesk'] text-zinc-400 mb-8"
      >
        Please fill out the following form and we will get back to you within
        the next 24 hours to help you become even greater at what you do.
      </motion.p>

      <form className="space-y-8">
        {/* Name Field */}
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col p-4">
            <motion.h1
             initial={{ opacity: 0, scale: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.1 }}
              className="p-2 w-8 rounded-full text-center font-['Space_Grotesk'] bg-zinc-600 mb-4"
            >
              1
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{  opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-xl sm:text-2xl lg:text-4xl font-['Space_Grotesk'] mb-2"
            >
              What Is Your Name?
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
              className="text-xs font-[Roboto_Condensed] text-red-500"
            >
              Required
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex-1 flex items-center justify-center"
          >
            <TextInput label="Your Sweet Name" />
          </motion.div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col p-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="p-2 w-8 rounded-full text-center font-['Space_Grotesk'] bg-zinc-600 mb-4"
            >
              2
            </motion.h1>
            <motion.h1
              initial={{  opacity: 0 }}
              whileInView={{  opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-xl sm:text-2xl lg:text-4xl font-['Space_Grotesk'] mb-2"
            >
              What is your email address?
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
              className="text-xs font-[Roboto_Condensed] text-red-500"
            >
              Required
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex-1 flex items-center justify-center"
          >
            <TextInput label="Email Address" />
          </motion.div>
        </div>

        {/* Query Field */}
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col p-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="p-2 w-8 rounded-full text-center font-['Space_Grotesk'] bg-zinc-600 mb-4"
            >
              3
            </motion.h1>
            <motion.h1
              initial={{  opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-xl sm:text-2xl lg:text-4xl font-['Space_Grotesk'] mb-2"
            >
              Can you tell me about your project / product / company in a few
              words?
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
              className="text-xs font-[Roboto_Condensed] text-red-500"
            >
              Required
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex-1 flex items-center justify-center"
          >
            <TextInput label="Query" />
          </motion.div>
        </div>

        {/* Submit Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
          className="px-4 py-2 text-lg sm:text-xl font-['Roboto_Condensed'] bg-blue-500 rounded-lg ml-4"
        >
          Send
        </motion.button>
      </form>

      {/* Poster Section */}
      <div className="rounded-lg overflow-hidden mt-10">
        <Poster />
      </div>
    </div>
  );
};

export default ContactPage;
