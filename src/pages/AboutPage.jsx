import React from "react";
import { easeInOut, motion } from "framer-motion";
import SkillCard from "../Components/SkillCard";
import { Poster } from "../Components/Poster";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen h-fit bg-[url('./workbg.jpg')] bg-no-repeat bg-fixed bg-cover">
      <div className="containers md:px-[14vw] px-[10vw]  pt-10 flex gap-10 items-center">
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          src="./logo.png"
          className=" rounded-full absolute sm:static sm:block w-[2.2rem] h-[2.2rem] sm:w-[8rem] sm:h-[8rem] sm:border-[10px] boder-[4px]  border-blue-500 top-[15.1vh] left-[55vw]"
          alt=""
        />
        <motion.h1
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="sm:text-6xl text-4xl sm:leading-[3.5vw] leading-[3.8vh] uppercase font-['Roboto_condensed']"
        >
          From Passion to a <br /> Developer
        </motion.h1>
      </div>
      <div>
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="md:px-[14vw] px-[10vw] pt-8 font-['Montserrat'] leading-[18px] tracking-tight"
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
          className="text-3xl font-[300] uppercase tracking-tighter md:px-[14vw] px-[10vw] mb-2 mt-8 text-gray-400 font-['Montserrat']"
        >
          My Philosophy
        </motion.h1>
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl font-['Montserrat'] md:px-[14vw] px-[10vw] leading-[18px]"
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
          className="text-3xl font-[300] uppercase tracking-tighter px-[14vw] mb-3 mt-6 text-gray-400"
        >
          Work Policy
        </motion.h1>
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl font-['Montserrat'] md:px-[14vw] px-[10vw] leading-[18px]"
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
          className="text-3xl font-[300] uppercase tracking-tighter md:px-[14vw] px-[10vw] mb-3 mt-6 text-gray-400"
        >
          Work Philosophy
        </motion.h1>
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl font-['Montserrat'] md:px-[14vw] px-[10vw] leading-[18px]"
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
          className="text-3xl font-[300] uppercase tracking-tighter md:px-[14vw] px-[10vw] mb-3 mt-6 text-gray-400"
        >
          Entrepreneurial Spirit
        </motion.h1>
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl font-['Montserrat'] md:px-[14vw] px-[10vw] leading-[18px]"
        >
          Possessing an entrepreneurial mindset, I'm highly adaptable and driven
          to achieve specific objectives. I'm not just focused on creating
          top-notch web solutions; I'm also aware of the competitive landscape.
          I dedicate myself to understanding exactly what you need, ensuring
          that the results exceed expectations.
        </motion.p>
      </div>
      <div className="tchstack px-[6vw] mt-10">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, delay: 0.2, ease: easeInOut }}
          className="text-6xl font-['oswald']"
        >
          Techstack
        </motion.h1>
        <div className="lang ">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="text-hollow2 text-3xl font-semibold my-6"
          >
            Programing Languages
          </motion.h1>
          <div className="lang flex flex-wrap gap-9">
            <div className="card1">
              <SkillCard
                icon={<img src="js.png" className="w-16 h-16" />}
                title="JavaScript"
                subtitle="Dyanamic"
              />
            </div>
            <div className="card2">
              <SkillCard
                icon={<img src="c.png" className="w-10 h-10 mx-3" />}
                title="C"
                subtitle="Dyanmic"
              />
            </div>
            <div className="card3">
              <SkillCard
                icon={<img src="typescript.png" className="w-10 h-10 mx-3" />}
                title="TypeScript"
                subtitle="Static"
              />
            </div>
            <div className="card4">
              <SkillCard
                icon={<img src="java.png" className="w-10 h-10 mx-3" />}
                title="Java"
                subtitle="Static"
              />
            </div>
            <div className="card5">
              <SkillCard
                icon={<img src="python.png" className="w-10 h-10 mx-3" />}
                title="Python"
                subtitle="Dyanamic"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-hollow2 text-3xl font-semibold my-6">Frontend</h1>

          <div className="front flex flex-wrap gap-9">
            <div className="card2">
              <SkillCard
                icon={<img src="reactjs.png" className="w-16 h-16" />}
                title="React Js"
                subtitle="Library"
              />
            </div>
            <div className="card3">
              <SkillCard
                icon={<img src="redux.png" className="w-16 h-16" />}
                title="Redux"
                subtitle="Library"
              />
            </div>
            <div className="card4">
              <SkillCard
                icon={<img src="react-router.png" className="w-16 h-16" />}
                title="ReactRouter"
                subtitle="Library"
              />
            </div>
            <div className="card5">
              <SkillCard
                icon={<img src="tailwind.png" className="w-16 h-16" />}
                title="Tailwid Css"
                subtitle="Library"
              />
            </div>
            <div className="card6">
              <SkillCard
                icon={<img src="html5.png" className="w-16 h-16" />}
                title="HTML"
                subtitle="MarkUp"
              />
            </div>
            <div className="card7">
              <SkillCard
                icon={<img src="css.png" className="w-16 h-16" />}
                title="CSS"
                subtitle="StyleSheet"
              />
            </div>
            <div className="card8">
              <SkillCard
                icon={<img src="three.png" className="w-16 h-16" />}
                title="Three Js"
                subtitle="3d Model"
              />
            </div>
            <div className="card9">
              <SkillCard
                icon={
                  <img src="gsap.jpg" className="w-12 mx-2 h-12 rounded-md" />
                }
                title="GSAP"
                subtitle="Animation"
              />
            </div>
            <div className="card10">
              <SkillCard
                icon={
                  <img src="motion.png" className="w-12 mx-2 h-10 rounded-md" />
                }
                title="Framer"
                subtitle="Animation"
              />
            </div>

            <div className="card11">
              <SkillCard
                icon={
                  <img
                    src="reactfibero.webp"
                    className="w-12 mx-2 h-10 rounded-md"
                  />
                }
                title="React3Fiber"
                subtitle="3d Model"
              />
            </div>
            <div className="card12">
              <SkillCard
                icon={
                  <img
                    src="next.png"
                    className="w-10 mx-2 bg-white h-10 rounded-md"
                  />
                }
                title="Next Js"
                subtitle="Framework"
              />
            </div>
            <div className="card13">
              <SkillCard
                icon={
                  <img
                    src="mui.png"
                    className="w-10 mx-2 bg-white h-10 rounded-md"
                  />
                }
                title="Material UI"
                subtitle="SAAS"
              />
            </div>
          </div>
        </div>
        <div className="back ">
          <h1 className="text-hollow2 text-3xl font-semibold my-6">Backend</h1>
          <div className="lang flex flex-wrap gap-9">
            <div className="card1">
              <SkillCard
                icon={<img src="nodejs.png" className="w-16 h-16" />}
                title="Node"
                subtitle="RunTime"
              />
            </div>
            <div className="card2">
              <SkillCard
                icon={<img src="express.png" className="w-10 h-10 mx-3" />}
                title="Express Js"
                subtitle="APIs"
              />
            </div>
            <div className="card3">
              <SkillCard
                icon={<img src="spring.png" className="w-10 h-10 mx-3" />}
                title="SpringBoot"
                subtitle="APIs"
              />
            </div>
            <div className="card4">
              <SkillCard
                icon={<img src="cloudinary.png" className="w-14 h-14 mx-1" />}
                title="Cloudinary"
                subtitle="FileHandeling"
              />
            </div>
            <div className="card5">
              <SkillCard
                icon={<img src="postman.png" className="w-14 h-14 mx-1" />}
                title="Postman"
                subtitle="ApiTesting"
              />
            </div>
            <div className="card6">
              <SkillCard
                icon={<img src="Appwrite.png" className="w-14 h-14 mx-2" />}
                title="Appwrite"
                subtitle="BaaS"
              />
            </div>
          </div>
        </div>
        <div className="back ">
          <h1 className="text-hollow2 text-3xl font-semibold my-6">Database</h1>
          <div className="lang flex flex-wrap gap-9">
            <div className="card1">
              <SkillCard
                icon={<img src="mongodb.png" className="w-16 h-16" />}
                title="MongoDB"
                subtitle="noSqlDb"
              />
            </div>
            <div className="card2">
              <SkillCard
                icon={<img src="mysql.png" className="w-14 h-14 mx-1" />}
                title="MySql"
                subtitle="SqlDb"
              />
            </div>
          </div>
        </div>
        <div className="tool">
          <h1 className="text-hollow2 text-3xl font-semibold my-6">Tools</h1>
          <div className="lang flex flex-wrap gap-9">
            <div className="card1">
              <SkillCard
                icon={<img src="vs.png" className="w-16 h-16" />}
                title="VS Code"
                subtitle="Editor"
              />
            </div>
            <div className="card2">
              <SkillCard
                icon={<img src="git.png" className="w-12 h-12 mx-1" />}
                title="GitHub"
                subtitle="DeveloperPlatform"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 pb-4 rounded-lg overflow-hidden">
          <Poster />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
