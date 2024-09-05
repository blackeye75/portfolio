import React from "react";

const SkillCard = ({icon, title, subtitle }) => {
  return (
    <div>
      <div className="bg-black text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center w-40 h-32 m-2">
      <div className="text-4xl mb-2">{icon}</div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default SkillCard;
