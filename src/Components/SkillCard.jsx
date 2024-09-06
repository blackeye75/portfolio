import React from "react";

const SkillCard = ({ icon, title, subtitle }) => {
  return (
    <div>
      <div className="bg-black hover:scale-110 duration-300 border-[.5px] border-zinc-700 hover:bg-zinc-800 text-white p-1 rounded-lg shadow-md flex items-center j  w-48 h-16 gap-1">
        <div className=" ">{icon}</div>
        <div className="" >
          {" "}
          <h3 className="leading-none text-lg font-bold font-['oswald']">{title}</h3>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
