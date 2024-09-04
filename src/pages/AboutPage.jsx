import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen h-fit ">
      <div className="container px-[14vw] pt-10 flex gap-10 items-center">
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          src="./logo.png"
          className=" rounded-full w-[8rem] h-[8rem] border-[10px] border-blue-500"
          alt=""
        />
        <motion.h1
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl leading-[3.5vw] uppercase font-['Roboto_condensed']"
        >
          From Passion to a <br /> Developer
        </motion.h1>
      </div>
      <div>
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="px-[14vw] pt-8 font-['Montserrat'] leading-[18px] tracking-tight"
        >
          Name's <span className="text-blue-500">Priyanshu Raj</span>, a
          passionate{" "}
          <span className="text-pink-500">FullStack Web developer</span> who is
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
        </motion.p>
        <motion.h1
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold uppercase tracking-tighter px-[14vw] mb-2 mt-8 text-amber-800 font-['Montserrat']"
        >
          My Philosophy
        </motion.h1>
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl font-['Montserrat'] px-[14vw] leading-[18px]"
        >
          I believe that the most powerful things are often invisible. With the
          right approach and execution, your storyor that of your business—can
          resonate with a broader audience. My goal is to help you establish or
          strengthen your online presence, transforming your brand into
          something truly remarkable
        </motion.p>
        <motion.h1
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold uppercase tracking-tighter px-[14vw] mb-3 mt-6 text-amber-800"
        >
          Work Policy
        </motion.h1>
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl font-['Montserrat'] px-[14vw] leading-[18px]"
        >
          I spend most of my time in front of laptop developing and learning.
          Working remotely is that I love, because it saves (a lot of) commuting
          time. However, this does not mean I am unwilling to work in other
          locations.
        </motion.p>
        <motion.h1
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold uppercase tracking-tighter px-[14vw] mb-3 mt-6 text-amber-800"
        >
          Work Philosophy
        </motion.h1>
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl font-['Montserrat'] px-[14vw] leading-[18px]"
        >
          I spend most of my time in front of my laptop, either developing or
          expanding my skill set. I'm a big believer in focusing on a specific
          area and mastering it. I love working remotely as it saves valuable
          commuting time, but I'm always open to opportunities that require
          working in different locations.
        </motion.p>
        <motion.h1
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold uppercase tracking-tighter px-[14vw] mb-3 mt-6 text-amber-800"
        >
          Entrepreneurial Spirit
        </motion.h1>
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl font-['Montserrat'] px-[14vw] leading-[18px]"
        >
          Possessing an entrepreneurial mindset, I'm highly adaptable and driven
          to achieve specific objectives. I'm not just focused on creating
          top-notch web solutions; I'm also aware of the competitive landscape.
          I dedicate myself to understanding exactly what you need, ensuring
          that the results exceed expectations.
        </motion.p>
      </div>
      <div className="tchstack">
        <h1>Techstack</h1>
        <div>
          <h1>Frontend</h1>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
