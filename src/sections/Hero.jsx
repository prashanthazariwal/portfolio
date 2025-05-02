import React from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { motion } from "motion/react";

const Hero = () => {
  const words =
    "Designing with purpose. Developing with precision. I build modern web experiences that speak.";
  return (
    <div className="w-full h-[76vh] overflow-hidden">
      <Spotlight />
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
          className="text-7xl font-bold mt-4 uppercase"
        >
          Front
          <span className="inline-block italic lowercase text-green-400">
            end
          </span>{" "}
          <br />
          developer
        </motion.h1>
        <TextGenerateEffect words={words} duration={2} filter={false} className={"max-w-sm text-base text-black text-justify font-semibold"} />
      </div>
    </div>
  );
};

export default Hero;
