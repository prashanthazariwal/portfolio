import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import BlurCircle from "../components/BlurCircle";
import SeeAllButton from "../components/SeeAllButton";

const About = () => {
  const ref = useRef(null);
  const about =
    "I focus on performance, aesthetics, and clean code. I'm always eager to learn, solve problems, and create web experiences that leave an impact.";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.8"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const transformByX = useTransform(scrollYProgress, [0, 0.4], [-30, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], [10, 0]);
  let words =
    "I'm a passionate Frontend Developer with a strong eye for design and detail. I specialize in building responsive, interactive user interfaces using modern technologies like React, Tailwind CSS, and Framer Motion. With hands-on experience in real-world projects from eCommerce sites to creative agency clones. ";

  words = words.split(" ");
  return (
    <>
      <div
        ref={ref}
        className="relative flex flex-col justify-between w-full p-4 mt-20 overflow-hidden md:items-end md:flex-row h-fit rounded-xl "
      >
        <BlurCircle
          className={"-bottom-[40%]  -left-20  bg-white dark:bg-neutral-800"}
        />
        <BlurCircle
          className={"-bottom-[40%] -right-20 bg-white dark:bg-neutral-800"}
        />

        <div className="relative flex flex-col w-full gap-2 md:w-1/2">
          <motion.span
            style={{
              opacity,
              x: transformByX,
              filter: blur,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="self-start text-xl font-extrabold font-Raleway"
          >
            Hello&nbsp;👋
          </motion.span>
          <motion.p
            initial={{
              opacity: 0,
              y: 5,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.5,
              ease: "backInOut",
            }}
            viewport={{
              once: true,
            }}
            className="w-4/5 mb-3 text-sm font-medium text-neutral-800 dark:text-neutral-400 font-Raleway"
          >
            {about}
          </motion.p>
        </div>
        <motion.p
          style={{
            opacity,
          }}
          className="w-full p-2 mt-5 text-base font-semibold text-justify md:w-1/2 text-neutral-900 md:mt-0"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <WordWrapper
                key={i}
                range={[start, end]}
                progress={scrollYProgress}
                index={i}
              >
                {word}&nbsp; &nbsp;
              </WordWrapper>
            );
          })}
        </motion.p>
      </div>
      <div className="flex items-center justify-between w-full px-4 mt-2 mb-32 h-fit">
        <h3 className="flex items-center gap-2 w-[75%] text-sm font-medium md:w-2/5 font-Raleway">
          explore more about me and my journey{" "}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right-dashed"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12h.5m3 0h1.5m3 0h6" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </motion.svg>
        </h3>
        <SeeAllButton className={"dark:text-neutral-100"} text={"learn more"} />
      </div>
    </>
  );
};

export default About;

const WordWrapper = ({ children, range, progress, index }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block">
      <span
        className={`absolute opacity-20 ${
          index === 3 ||
          index === 4 ||
          index === 17 ||
          index === 25 ||
          index === 48 ||
          index === 66
            ? "text-green-600 font-semibold lg:text-xl font-ComicReliefRegular"
            : "text-neutral-950 dark:text-neutral-100 lg:text-xl"
        }`}
      >
        {children}
      </span>
      <motion.span
        className={`${
          index === 3 ||
          index === 4 ||
          index === 17 ||
          index === 25 ||
          index === 48 ||
          index === 66
            ? "text-green-600 font-semibold lg:text-xl font-ComicReliefRegular"
            : "text-neutral-950 dark:text-neutral-100 lg:text-xl"
        }`}
        style={{ opacity }}
      >
        {children}
      </motion.span>
    </span>
  );
};
