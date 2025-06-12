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
        "A fully responsive flight booking application where users can fill out a form to request a booking. The admin panel (with login authentication) displays user submissions in a dynamic table, enabling further follow-up. Used Formik with Yup for form handling and validation, Redux for state management, and LocalStorage for data persistence. Smooth, modern UI animations powered by GSAP. Built entirely from scratch to showcase full-stack logic and frontend proficiency.",
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
        "A high-fidelity frontend clone of the Obeys Agency website, built to showcase advanced UI/UX techniques. Implemented smooth scrolling using Locomotive Scroll, seamless animations with GSAP, and dynamic interactions with Shery.js. This project highlights attention to design detail and modern frontend animation practices using pure JavaScript, HTML, and CSS—no frameworks involved. ",
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
        "A pixel-perfect clone of the Two Good Co website, recreated to demonstrate strong design aesthetics and animation skills. The project features smooth scrolling with Locomotive Scroll and elegant UI animations using GSAP. Developed using only HTML, CSS, and vanilla JavaScript to faithfully reproduce a modern, award-winning design experience. ",
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
