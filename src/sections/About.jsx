import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { span } from "motion/react-client";

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.8"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const transformByX = useTransform(scrollYProgress, [0, 0.4], [-30, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.4], [10, 0]);
  let words =
    "I’m a passionate Frontend Developer with a strong eye for design and detail. I specialize in building responsive, interactive user interfaces using modern technologies like React, Tailwind CSS, and Framer Motion. With hands-on experience in real-world projects from eCommerce sites to creative agency clones I focus on performance, aesthetics, and clean code. I'm always eager to learn, solve problems, and create web experiences that leave an impact.";

  words = words.split(" ");
  return (
    <div
      ref={ref}
      className="w-full h-fit flex flex-col md:flex-row md:my-20 md:gap-5 justify-center items-center py-8 "
    >
      <motion.h2
        style={{
          opacity,
          x: transformByX,
        }}
        className="self-start text-7xl md:text-9xl font-extrabold font-SpecialGothic"
      >
        Hello
      </motion.h2>
      <motion.p
        style={{
          opacity,
        }}
        className="lg:w-5/6 text-neutral-900 mt-5 md:mt-0 text-lg text-justify font-semibold"
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
              {word}
            </WordWrapper>
          );
        })}
      </motion.p>
    </div>
  );
};

export default About;

const WordWrapper = ({ children, range, progress, index }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="inline-block mx-3 relative">
      <span
        className={`absolute opacity-20 ${
          index === 3 ||
          index === 4 ||
          index === 17 ||
          index === 25 ||
          index === 48 ||
          index === 66
            ? "text-green-600 font-semibold text-xl font-ComicReliefRegular"
            : "text-neutral-950"
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
            ? "text-green-600 font-semibold text-xl font-ComicReliefRegular"
            : "text-neutral-950"
        }`}
        style={{ opacity }}
      >
        {children}
      </motion.span>
    </span>
  );
};
