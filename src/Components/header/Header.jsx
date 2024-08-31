import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TbBrandGithubFilled } from "react-icons/tb";

export const Header = () => {
  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "#",
    },
    {
      id: 2,
      title: "Work",
      link: "#",
    },
    {
      id: 3,
      title: "About",
      link: "#",
    },
    {
      id: 4,
      title: "Contact",
      link: "#",
    },
  ];
  return (

    
    <nav className=" flex py-4 scroll-smooth bg-transparent backdrop-blur-sm sticky top-0 z-10 px-5 justify-between  items-center">
      <div className="logo flex gap-3 items-center">
        <div className="img  ">
          <img
            src="./logo.png"
            className=" p-[2px] h-14 w-14 hover:rotate-[280deg] duration-1000 border-[5px] border-blue-600 rounded-full"
            alt=""
          />
        </div>
        <div className="dets">
          <h1 className="leading-none font-bold text-xl">Priyanshu Raj</h1>
          <h1 className="font-thin text-sm">Fullstack Web Developer</h1>
        </div>
      </div>
      <div className="menu">
        <div className="bg-[#212427] rounded-full p-2 px-4">
          <ul className="flex items-center justify-between gap-3 font-semibold w-fit">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block text-sm py-2 px-3 uppercase"
                >
                  {item.title}
                </a>
              </li>
            ))}

            {/* <button className="text-xl ps-14"><SlEarphones /></button> */}
          </ul>
        </div>
      </div>
      <div className="link gap-4 flex items-center ">
        <div className="svg ">
          <svg
            fill="#fff"
            width="40px"
            height="40px"
            viewBox="0 0 56 56"
            id="Layer_1"
            version="1.1"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path d="M18.9,25.5C18.9,25.5,18.9,25.5,18.9,25.5C18.9,25.6,18.9,25.6,18.9,25.5c2.3,2.5,5.6,4.1,9.1,4.1c3.6,0,6.8-1.6,9-4   c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c1.9-2.2,3.1-5,3.1-8.1C40.3,10.5,34.8,5,28,5c-3.7,0-7.1,1.7-9.3,4.3c0,0-0.1,0-0.1,0.1   c0,0,0,0,0,0c-1.8,2.1-2.9,4.9-2.9,7.9C15.7,20.5,16.9,23.3,18.9,25.5z M19.7,11.3c1,0.6,2.2,1.1,3.4,1.5c-0.2,1.1-0.3,2.3-0.4,3.6   h-4.9C17.9,14.4,18.6,12.7,19.7,11.3z M38.2,16.3h-4.9c0-1.2-0.2-2.4-0.4-3.5c1.3-0.3,2.4-0.8,3.5-1.4   C37.4,12.8,38.1,14.5,38.2,16.3z M36.1,23.6c-0.9-0.5-2-0.9-3.2-1.3c0.2-1.3,0.4-2.6,0.4-4h4.9C38,20.3,37.3,22.1,36.1,23.6z    M25,13.2c1,0.2,2.1,0.3,3.1,0.3c1,0,1.9-0.1,2.9-0.2c0.2,0.9,0.3,2,0.3,3.1h-6.6C24.8,15.2,24.9,14.1,25,13.2z M25.5,11.2   c0.7-2.5,1.7-4,2.5-4c0.8,0,1.9,1.5,2.6,4C28.9,11.5,27.1,11.5,25.5,11.2z M31.3,18.3c0,1.3-0.2,2.5-0.4,3.6c-1-0.2-2-0.2-3.1-0.2   c-1,0-1.9,0.1-2.8,0.3c-0.2-1.1-0.3-2.3-0.4-3.7H31.3z M24.7,27c-1.2-0.4-2.3-1.1-3.3-1.9c0.6-0.3,1.4-0.6,2.2-0.8   C23.9,25.3,24.2,26.2,24.7,27z M25.5,23.9c0.8-0.1,1.6-0.2,2.4-0.2c0.9,0,1.7,0.1,2.6,0.2c-0.7,2.3-1.7,3.7-2.5,3.7   C27.2,27.6,26.2,26.3,25.5,23.9z M32.4,24.3c0.9,0.2,1.6,0.5,2.3,0.8c-1,0.8-2.1,1.5-3.4,1.9C31.8,26.2,32.1,25.3,32.4,24.3z    M32.5,10.9c-0.3-1.3-0.8-2.4-1.3-3.3C32.7,8,34,8.8,35.1,9.9C34.3,10.3,33.4,10.6,32.5,10.9z M23.5,10.8c-0.9-0.3-1.7-0.6-2.5-1   c1.1-1,2.4-1.8,3.8-2.3C24.3,8.4,23.8,9.6,23.5,10.8z M22.7,18.3c0,1.4,0.2,2.8,0.4,4.1c-1.3,0.3-2.3,0.7-3.2,1.3   c-1.2-1.5-2-3.3-2.1-5.3H22.7z" />

              <path d="M52.2,35.3c-1-1-2.8-0.9-4.1-0.6c-0.4,0.1-0.7,0.2-1.1,0.4l-9.2,4.4c-0.3,0.2-0.7,0.3-1.1,0.3h-1.9   c0.4-0.9,0.3-1.8-0.2-2.8c-0.8-1.4-2.3-2.2-4-2.2h-9.8c-0.6,0-1.2,0.1-1.8,0.3l-6.9,2.7C11.8,37,11,36.3,10,36.3H5.2   c-1.2,0-2.2,1-2.2,2.2v10.2C3,50,4,51,5.2,51H10c0.9,0,1.6-0.5,2-1.2l10.3,0c0.3,0,0.5,0,0.8-0.1l15.3-2.7c0.5-0.1,0.9-0.2,1.3-0.4   l10.9-5.7c1.3-0.7,2.2-1.9,2.4-3.2C53.1,36.4,52.7,35.7,52.2,35.3z M10,49H5.2C5.1,49,5,48.9,5,48.8V38.6c0-0.1,0.1-0.2,0.2-0.2H10   c0.1,0,0.2,0.1,0.2,0.2v0.7c0,0,0,0,0,0v9.5C10.2,48.9,10.1,49,10,49z M51,37.3c-0.1,0.7-0.6,1.3-1.3,1.7l-10.9,5.7   c-0.2,0.1-0.5,0.2-0.7,0.2l-15.3,2.7c-0.1,0-0.3,0-0.4,0l-10.1,0V40l7.5-3c0.3-0.1,0.7-0.2,1-0.2h9.8c1,0,1.9,0.5,2.3,1.2   c0.3,0.5,0.3,0.9-0.2,1.3c-0.4,0.5-1.1,0.8-1.9,0.8h-9.4c-0.6,0-1,0.4-1,1s0.4,1,1,1h9.4c0.6,0,1.2-0.1,1.7-0.3h4.2   c0.7,0,1.4-0.2,2-0.4l9.2-4.4c0.2-0.1,0.4-0.2,0.6-0.2c1.3-0.3,2.1-0.1,2.4,0.1C51,36.8,51,37,51,37.3z" />
            </g>
          </svg>
        </div>
        <div className="visit flex gap-3 ">
          {/* <Link to=""> */}
          <div className="hover:bg-blue-500 p-2 rounded-full duration-300">
            <GrLinkedinOption size={25} className=" " />
          </div>
          {/* </Link> */}
          <div className="hover:bg-purple-900 p-2 rounded-full duration-300">
            <BiLogoInstagramAlt size={25} />
          </div>
          <div className="hover:bg-black p-2 rounded-full duration-300">
            <TbBrandGithubFilled size={25} />
          </div>
        </div>
      </div>
    </nav>
  );
};