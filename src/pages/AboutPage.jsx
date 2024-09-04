import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen h-fit ">
      <div className="container px-[14vw] pt-10 flex gap-10 items-center">
        <motion.img
          initial={{scale:0}}
          whileInView={{scale:1}}
          transition={{duration:1}}
          src="./logo.png"
          className=" rounded-full w-[8rem] h-[8rem] border-[10px] border-blue-500"
          alt=""
        />
        <h1 className="text-6xl leading-[3.5vw] uppercase font-['Roboto_condensed']">
          From Passion to a <br /> Developer
        </h1>
      </div>
      <div>
        <p className="px-[14vw] pt-8 font-['Montserrat'] leading-[18px] tracking-tight">
          Name's Priyanshu Raj, a passionate FullStack Web developer who is
          (currently) based in banglore. I am 23 years old, but have at least
          1.7 year of experience in building projects and developing. I hold a
          passion for developing things and believe that great things are often
          invisible. With an impactful thoughts and job, you can convey your
          story or the story of your business to a wider audience. I want to
          help you build an online brand and or strengthening your online brand.
          I am a also a person with an entrepreneurial mindset. Due to my
          entrepreneurial mindset, I am really flexible when it comes to
          achieving certain objectives. Think about developing top-notch
          web(apps) and website, but also there is competiton. When I start with
          a certain task, I do want to know what you're exactly in need of.
          Reason why I spend time in learning more skills is because of the fact
          that it makes me a more valuable person(developer). I am a big
          believer in focus on a specific area and getting really good at it.
        </p>
        <h1 className="text-3xl px-[14vw] mb-3 mt-8">How I got started</h1>
        <p className="text-xl font-['Montserrat'] px-[14vw] leading-[18px]">
          I've been involved in trying to get into development since my 1st year
          of college and when you decide to learn something it is obvious you
          face difficulties. I would like to thank Hitesh Choudhary. His
          javascript (Chai aur javascript) and react (Chai aur react) helped me
          learning most of the things i work with now .
        </p>
        <h1 className="text-3xl px-[14vw] mb-3 mt-8">Work Policy</h1>
        <p className="text-xl font-['Montserrat'] px-[14vw] leading-[18px]">
          I spend most of my time in front of laptop developing and learning.
          Working remotely is that I love, because it saves (a lot of) commuting
          time. However, this does not mean I am unwilling to work in other
          locations.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
