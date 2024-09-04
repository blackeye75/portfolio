import React from "react";

const Projects = () => {
  return (
    <div className="w-full min-h-full h-fit  bg-gradient-to-l from-zinc-800 pb-6 to-zinc-950 flex flex-col items-center justify-center">
      <div className="w-full min-h-full h-fit flex items-center flex-col space-y-10">
        <div className="flex ">
          <h1 className="my-5    text-5xl uppercase font-semibold font-[Oswald]">
            Projects
          </h1>
        </div>
        <div className=" hover:scale-105 duration-300 w-[65%] h-[30vh] flex  border-[.5px] bg-[#121212] rounded-xl overflow-hidden border-zinc-700 ">
          <div className=" text w-[50%] h-full pt-8 p-3  text-white ">
            <h1 className="text-5xl tracking-tight font-['Oswald'] leading-[5vw]">
              Function Junction
            </h1>
            <h1 className="text-2xl leading-[1] font-['Roboto'] tracking-tight">
              Event Managment Booking Platform{" "}
            </h1>
            <p className="text-l font-['Roboto'] tracking-tight uppercase ">
              React Js, Appwrite
            </p>
          </div>
          <div className="img w-[50%] h-full bg-blue-500 "></div>
        </div>
        <div className="hover:scale-105 duration-300 w-[65%] h-[30vh] flex  border-[.5px] bg-[#121212] border-white rounded-xl overflow-hidden">
          <div className="text w-[50%] h-full pt-8 p-3  text-white">
            <h1 className="text-5xl tracking-tight font-['Oswald'] leading-[5vw]">
              DBlog
            </h1>
            <h1 className="text-2xl leading-[1] font-['Roboto'] tracking-tight">
              Blog CURD And File Handleing{" "}
            </h1>
            <p className="text-l font-['Roboto'] tracking-tight uppercase ">
              React Js, Appwrite
            </p>
          </div>
          <div className="img w-[50%] h-full bg-blue-500 "></div>
        </div>
        <div className="hover:scale-105 duration-300 w-[65%] h-[30vh] flex  border-[.5px] bg-[#121212] border-white rounded-xl overflow-hidden">
          <div className="text w-[50%] h-full pt-8 p-3  text-white">
            <h1 className="text-5xl tracking-tight font-['Oswald'] leading-[5vw]">
              JustRent
            </h1>
            <h1 className="text-2xl leading-[1] font-['Roboto'] tracking-tight">
              Rent and Buy Properties{" "}
            </h1>
            <p className="text-s font-['Roboto'] tracking-tight uppercase ">
              MERN Stack,Cloudinary
            </p>
          </div>
          <div className="img w-[50%] h-full bg-blue-500 "></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
