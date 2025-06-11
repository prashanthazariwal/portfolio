import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { delay } from "motion";
import SeeAllButton from "../components/SeeAllButton";
import Projects from "../components/Projects";

const ProjectSection = ({ selectedCategory = "all", spliceValue }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.7"],
  });

  const [hovered, setHovered] = useState(null);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const transformByY = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const lineWidth = useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"]);

  const projects = [
    {
      projectName: "To-Go",
      title: "travel your dream place",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem amet dicta ipsam eius esse placeat dolores temporibus minima quo vel necessitatibus aspernatur eveniet libero officiis eum, assumenda maiores in porro. ",
      tack: [
        "react",
        "javascript",
        // "html",
        // "css",
        "tailwind-css",
        "gsap",
        "Motion-for-react",
        // "react-native",
      ],
      url: "https://travel-website-delta-blond.vercel.app/",
    },
    {
      projectName: "obeys agency clone",
      title: "creative-agency",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem amet dicta ipsam eius esse placeat dolores temporibus minima quo vel necessitatibus aspernatur eveniet libero officiis eum, assumenda maiores in porro. ",
      tack: [
        // "react",
        "javascript",
        "html",
        "css",
        // "tailwind-css",
        "gsap",
        // "Motion-for-react",
        // "react-native",
      ],
      url: "https://obeys-agency-clone-phi.vercel.app/",
    },
    {
      projectName: "Two Good CO",
      title: "creative-agency",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem amet dicta ipsam eius esse placeat dolores temporibus minima quo vel necessitatibus aspernatur eveniet libero officiis eum, assumenda maiores in porro. ",
      tack: [
        // "react",
        "javascript",
        "html",
        "css",
        // "tailwind-css",
        "gsap",
        // "Motion-for-react",
        // "react-native",
      ],
      url: "https://two-good-co.vercel.app/",
    },
  ];

  // Filter projects based on selected category
  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "html-css") {
      return project.tack.includes("html") && project.tack.includes("css");
    }
    return project.tack.includes(selectedCategory);
  });

  return (
    <>
      <div className="flex justify-between w-full px-4 mt-8 h-fit md:mt-0 font-Montserrat">
        <h4 className="text-sm font-semibold uppercase text-neutral-800 dark:text-neutral-100">
          projects
        </h4>

        <SeeAllButton className={"dark:text-neutral-100"} text={"see all"} />
      </div>
      <motion.div ref={ref} className="w-full py-10 overflow-hidden ">
        <Projects
          projects={filteredProjects}
          spliceValue={spliceValue}
          setHovered={setHovered}
          hovered={hovered}
          opacity={opacity}
          lineWidth={lineWidth}
        />
      </motion.div>
    </>
  );
};

export default ProjectSection;
