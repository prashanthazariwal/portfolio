import React from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { motion } from "motion/react";

const Hero = () => {
  const words =
    "Designing with purpose. Developing with precision. I build modern web experiences that speak.";
  return (
    <div className="relative w-full md:h-[76vh] overflow-hidden rounded-tl-xl rounded-tr-xl">
      <Spotlight className={"h-[100%] left-[10%] top-0 w-[100%]"}/>
      <Spotlight className={"h-[100%] left-[100%] top-0 w-[100%]"}/>
      <div className="w-full  py-10 h-full flex flex-col justify-center items-center select-none">
        <motion.h1
          initial={{
            y: 10,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="md:text-7xl text-4xl font-bold mt-4 uppercase font-Montserrat"
        >
          Front
          <span className="inline-block italic lowercase text-green-400 font-ComicReliefRegular">
            end
          </span>{" "}
          <br />
          developer
        </motion.h1>
        <TextGenerateEffect
          words={words}
          duration={2}
          filter={false}
          className={"max-w-md text-base text-black text-center mt-28 font-semibold font-Montserrat"}
        />
      </div>
    </div>
  );
};

export default Hero;
