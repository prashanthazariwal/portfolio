import React from "react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

const BlurCircle = ({ className }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        ease: "easeOut",
        duration: 2,
      }}
      className={cn("blur-[80px] w-72 h-72 rounded-full absolute", className)}
    ></motion.div>
  );
};

export default BlurCircle;
