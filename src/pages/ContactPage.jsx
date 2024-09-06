import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen h-fit px-[10vw] bg-[url('./workbg.jpg')]  bg-no-repeat bg-fixed bg-cover pt-14">
      <h1 className="text-blue-500 text-7xl font-bold font-['Roboto_Condensed']">
        Contact
      </h1>
      <p className="text-sm font-['Space_Grotesk'] text-zinc-400 " >
        Please fill out the following form and we will get back to you within
        the next 24 hours to help you become even greater at what you do.
      </p>
      <div className="form " >
    <div className="name" ></div>
    <div className="email" ></div>
    <div className="query" ></div>
      </div>
    </div>
  );
};

export default ContactPage;
