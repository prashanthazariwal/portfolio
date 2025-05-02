import React from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const About = () => {
  const words =
    "I'm a frontend developer specializing in React and modern UI/UX design. I love building fast, responsive interfaces with clean code and seamless animations.";
  return (
    <div className="w-full h-fit flex justify-center pb-8 ">
      <TextGenerateEffect
        words={words}
        className={"w-4/5 text-neutral-500 text-xl text-justify font-semibold"}
      />
    </div>
  );
};

export default About;
