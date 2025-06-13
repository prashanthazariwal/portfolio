import React from "react";
import { motion } from "motion/react";

const Projects = ({
  projects,
  spliceValue,
  setHovered,
  hovered,
  opacity,
  lineWidth,
}) => {
  // List of all possible technologies
  const allTechnologies = [
    "react",
    "javascript",
    "html",
    "css",
    "tailwind-css",
    "gsap",
    "Motion-for-react",
    "react-native",
  ];

  // Limit the number of projects based on spliceValue
  const limitedProjects = projects.slice(0, spliceValue);

  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      {limitedProjects.map((project, idx) => (
        <div className="" key={project.projectName}>
          <motion.div
            style={{
              opacity,
              width: lineWidth,
            }}
            className="border-t border-neutral-900 "
          ></motion.div>
          <motion.div
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleProjectClick(project.url)}
            className="relative flex flex-col justify-between w-full p-2 cursor-pointer md:flex-row"
          >
            {hovered == idx && (
              <>
                <motion.div
                  layoutId="project-background"
                  className="absolute inset-0 rounded-lg [background-size:2px_2px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                ></motion.div>
              </>
            )}
            <motion.h2
              animate={{
                x: hovered === idx ? 4 : 0,
                y: hovered === idx ? 4 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="self-start z-10 w-fit md:max-w-[30%] max-w-full ml-4 md:ml-0 md:mt-4 text-4xl font-semibold font-Raleway uppercase"
            >
              {project.projectName} <br />{" "}
              <motion.span
                initial={{
                  filter: "blur(10px)",
                }}
                whileInView={{
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                }}
                className="inline-block text-lg font-medium "
              >
                {project.title}
              </motion.span>
            </motion.h2>
            <div className="project-discription min-h-[15rem] flex flex-col gap-10 justify-between items-end py-2 w-full md:w-2/3">
              <motion.div
                animate={{
                  x: hovered === idx ? -4 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="techUsed-container w-full md:min-w-[80%] md:w-4/5 p-2 flex flex-wrap gap-3"
              >
                {allTechnologies.map((tech, i) => {
                  const isUsed = project.tack.includes(tech);
                  return (
                    <motion.span
                      initial={{
                        y: 7,
                        opacity: 0,
                        filter: "blur(10px)",
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                        delay: i * 0.1,
                      }}
                      key={i}
                      className={`inline-block px-4 py-1 text-base font-medium border border-black rounded-full font-Raleway w-fit h-fit ${
                        isUsed
                          ? "bg-green-400/50 "
                          : "text-black bg-transparent"
                      }`}
                    >
                      {tech}
                    </motion.span>
                  );
                })}
              </motion.div>
              <motion.p
                animate={{
                  x: hovered === idx ? -4 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="z-10 w-full mb-6 text-sm font-semibold text-justify font-Raleway text-neutral-600 dark:text-neutral-100 md:w-4/5"
              >
                {project.discription}
              </motion.p>
            </div>
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default Projects;
