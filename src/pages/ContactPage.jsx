import TextInput from "../Components/TextInput";
import React from "react";
import {Poster} from "../Components/Poster"

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen h-fit px-[10vw] bg-[url('./workbg.jpg')]  bg-no-repeat bg-fixed bg-cover pt-14">
      <h1 className="text-blue-500 text-7xl font-bold font-['Roboto_Condensed']">
        Contact
      </h1>
      <p className="text-sm font-['Space_Grotesk'] text-zinc-400 ">
        Please fill out the following form and we will get back to you within
        the next 24 hours to help you become even greater at what you do.
      </p>
      <form className="msg ">
        <div className="name flex ">
          <div className="dets flex-1 flex flex-col  p-4">
            <h1 className="p-2 w-[7%] rounded-full text-center font-['Space_Grotesk'] bg-zinc-600 ">
              1
            </h1>
            <h1 className="text-4xl font-['Space_Grotesk'] mt-2 ">
              What Is Your Name ?
            </h1>
            <h3 className="text-xs font-[Roboto_Condensed] text-red-500">
              Required
            </h3>
          </div>
          <div className="field  flex-1 flex items-center justify-center ">
            {/* field */}
            <TextInput label="Your Sweet Name" />
          </div>
        </div>
        <div className="email flex">
          <div className="dets flex-1 flex flex-col  p-4">
            <h1 className="p-2 w-[7%] rounded-full text-center font-['Space_Grotesk'] bg-zinc-600 ">
              2
            </h1>
            <h1 className="text-4xl font-['Space_Grotesk'] mt-2 ">
              What is your email address?
            </h1>
            <h3 className="text-xs font-[Roboto_Condensed] text-red-500">
              Required
            </h3>
          </div>
          <div className="field  flex-1 flex items-center justify-center ">
            {/* field */}
            <TextInput label="Email Adderress" />
          </div>
        </div>
        <div className="query flex">
          <div className="dets flex-1 flex flex-col  p-4">
            <h1 className="p-2 w-[7%] rounded-full text-center font-['Space_Grotesk'] bg-zinc-600 ">
              3
            </h1>
            <h1 className="text-4xl font-['Space_Grotesk'] mt-2 leading-[2vw]">
              Can you tell me about your project / product / company in a few
              words?
            </h1>
            <h3 className="text-xs font-[Roboto_Condensed] text-red-500">
              Required
            </h3>
          </div>
          <div className="field  flex-1 flex items-center justify-center ">
            {/* field */}
            <TextInput label="Query" />
          </div>
        </div>
        <button className="px-4 py-1 text-xl font-['Roboto_Condensed'] bg-blue-500 rounded-lg ml-4">
          Send
        </button>
      </form>
      <div className=" rounded-lg overflow-hidden mt-10" >
        <Poster/>
      </div>
    </div>
  );
};

export default ContactPage;
