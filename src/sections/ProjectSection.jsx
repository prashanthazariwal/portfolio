import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const ProjectSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const transformByX = useTransform(scrollYProgress, [0, 0.1], [-20, 0]);
  const lineWidth = useTransform(scrollYProgress, [0, 0.1], ["0%", "100%"]);

  const projects = [
    {
      projectName: "To-Go",
      title: "travel your dream place",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem amet dicta ipsam eius esse placeat dolores temporibus minima quo vel necessitatibus aspernatur eveniet libero officiis eum, assumenda maiores in porro. ",
      tack: [
        "react",
        "javascript",
        "html",
        "css",
        "tailwind-css",
        "gsap",
        "Motion-for-react",
        "react-native",
      ],
    },
    {
      projectName: "obeys agency clone",
      title: "creative-agency",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem amet dicta ipsam eius esse placeat dolores temporibus minima quo vel necessitatibus aspernatur eveniet libero officiis eum, assumenda maiores in porro. ",
      tack: [
        "react",
        "javascript",
        "html",
        "css",
        "tailwind-css",
        "gsap",
        "Motion-for-react",
        "react-native",
      ],
    },
  ];
  return (
    <>
      <div className="w-full h-fit mt-8 md:mt-0 flex justify-between px-4 font-Montserrat">
        <h4 className="text-sm font-semibold uppercase text-neutral-800">
          projects
        </h4>
        <button className="text-sm font-semibold uppercase text-neutral-800 ">
          see all
        </button>
      </div>
      <div className="w-full py-10  overflow-hidden">
        {projects.map((project) => (
          <div className="" ref={ref} key={project.projectName}>
            <motion.div
              style={{
                opacity,
                width: lineWidth,
              }}
              className="border-t border-neutral-900"
            ></motion.div>
            <div className="w-full py-4 flex flex-col md:flex-row justify-between">
              <motion.h2
                style={{
                  opacity,
                  x: transformByX,
                }}
                className="self-start w-fit md:max-w-[30%] max-w-full ml-4 md:ml-0 text-4xl font-semibold font-Raleway uppercase"
              >
                {project.projectName} <br />{" "}
                <span className="text-lg font-medium">{project.title}</span>
              </motion.h2>
              <div className="project-discription min-h-[15rem] flex flex-col gap-6 justify-between items-center py-2 w-full md:w-2/3">
                <div className="techUsed-container w-full md:min-w-[80%] md:w-4/5 mx-auto p-2 flex  flex-wrap gap-3">
                  {project.tack.map((tack, i) => {
                    return (
                      <span
                        key={i}
                        className="inline-block w-fit h-fit px-4 py-1 rounded-full text-black border-black border"
                      >
                        {tack}
                      </span>
                    );
                  })}
                </div>
                <p className="w-full mb-6 md:w-4/5 mx-auto">{project.discription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
