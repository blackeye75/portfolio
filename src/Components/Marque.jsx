// import React from "react";
// import { motion } from "framer-motion";

// const Marque = () => {
//   return (
//     <div className="w-full md:py-4 py-7 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-l from-zinc-900 to-slate-950">
//       <div className="text border-t-2 border-b-2 border-zinc-600 flex  text-black whitespace-nowrap overflow-hidden p-4 ">
//         {/* <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='md:text-[8vmax] pr-3  text-[15vmax] font-["Bebas_Neue"] font-bold tracking-wide'>
//           The Junction For Your Every Function! 
//         </motion.h1>
//         <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='md:text-[8vmax]  pr-3 text-[15vmax] font-["Bebas_Neue"] font-bold tracking-wide'>
//         The Junction For Your Every Function!
//         </motion.h1> */}
//         <motion.img
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
//           src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           className="w-[30vw] hover:blur-sm   h-[10vw] rounded-full px-9"
//         />
//         <motion.img
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
//           src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           className="w-[30vw] hover:blur-sm   h-[10vw] rounded-full px-9"
//         />
//         <motion.img
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
//           src="https://plus.unsplash.com/premium_photo-1681666713677-8bd559bef6bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           className="w-[30vw] hover:blur-sm   h-[10vw] rounded-full px-9"
//         />
//         <motion.img
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
//           src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           className="w-[30vw] hover:blur-sm   h-[10vw] rounded-full px-9"
//         />
//         <motion.img
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
//           src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           className="w-[30vw] hover:blur-sm   h-[10vw] rounded-full px-9"
//         />
//         <motion.img
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
//           src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           className="w-[30vw] hover:blur-sm   h-[10vw] rounded-full px-9"
//         />
//         <motion.img
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
//           src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           className="w-[30vw] hover:blur-sm   h-[10vw] rounded-full px-10"
//         />
//         <motion.img
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
//           src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           className="w-[30vw] hover:blur-sm   h-[10vw] rounded-full px-9"
//         />
//         <motion.img
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
//           src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           className="w-[30vw] hover:blur-sm   h-[10vw] rounded-full "
//         />
//         <motion.img
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
//           src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           className="w-[30vw] hover:blur-sm   h-[10vw] rounded-full "
//         />
//         <motion.img
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
//           src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           className="w-[30vw] hover:blur-sm   h-[10vw] rounded-full "
//         />
//         <motion.img
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
//           src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           className="w-[30vw] hover:blur-sm   h-[10vw] rounded-full "
//         />
//       </div>
//     </div>
//   );
// };

// export default Marque;


import React from "react";
import { motion } from "framer-motion";

const Marque = () => {
  return (
    <div className="w-full md:py-4 py-7 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-l from-zinc-900 to-slate-950">
      <div className="text border-t-2 border-b-2 border-zinc-600 flex text-black whitespace-nowrap overflow-hidden p-4 ">
        <motion.img
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="md:w-[30vw] md:h-[10vw] w-[60vw] h-[20vw] hover:blur-sm rounded-full px-4 md:px-9"
        />
        <motion.img
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="md:w-[30vw] md:h-[10vw] w-[60vw] h-[20vw] hover:blur-sm rounded-full px-4 md:px-9"
        />
        <motion.img
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          src="https://plus.unsplash.com/premium_photo-1681666713677-8bd559bef6bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="md:w-[30vw] md:h-[10vw] w-[60vw] h-[20vw] hover:blur-sm rounded-full px-4 md:px-9"
        />
        <motion.img
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="md:w-[30vw] md:h-[10vw] w-[60vw] h-[20vw] hover:blur-sm rounded-full px-4 md:px-9"
        />
        <motion.img
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="md:w-[30vw] md:h-[10vw] w-[60vw] h-[20vw] hover:blur-sm rounded-full px-4 md:px-9"
        />
        <motion.img
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="md:w-[30vw] md:h-[10vw] w-[60vw] h-[20vw] hover:blur-sm rounded-full px-4 md:px-9"
        />
      </div>
    </div>
  );
};

export default Marque;
