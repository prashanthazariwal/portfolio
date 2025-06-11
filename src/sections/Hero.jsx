import React from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { motion } from "motion/react";

const Hero = () => {
  const words =
    "Designing with purpose. Developing with precision. I build modern web experiences that speak.";
  return (
    <div className="relative  w-full h-[60dvh] md:h-[80vh] overflow-hidden rounded-tl-xl rounded-tr-xl">
      <Spotlight className={"h-[100%] left-[10%] top-20 md:top-0  w-[100%]"} />
      <Spotlight className={"h-[100%] left-[110%] top-0 w-[100%]"} />
      <div className="flex flex-col items-center justify-center w-full h-full py-10 select-none">
        <motion.h1
          initial={{
            filter: "blur(10px)",
            y: 10,
            opacity: 0,
          }}
          animate={{
            filter: "blur(0px)",
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="mt-4 text-4xl font-bold leading-none uppercase lg:text-7xl md:text-6xl font-Montserrat text-neutral-900 dark:text-neutral-100"
        >
          Front
          <span className="inline-block italic font-medium text-green-400 lowercase font-ComicReliefRegular">
            end
          </span>{" "}
          <br />
          developer
        </motion.h1>
        <TextGenerateEffect
          words={words}
          duration={2}
          filter={false}
          className={
            "max-w-[80%]  md:max-w-md text-xs md:text-sm text-neutral-800 dark:text-neutral-200 text-center mt-10 font-semibold font-Raleway"
          }
        />
      </div>
    </div>
  );
};

export default Hero;
