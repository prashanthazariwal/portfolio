import React from "react";
import About from "../sections/About";
import profile1Img from "../assets/images/profile.png";
import parallax from "../assets/images/parallaxLogo.png";
import BrandingKiteLogo from "../assets/images/BrandingKiteLogo.jpg";
import BlurCircle from "../components/BlurCircle";
import Contact from "../sections/Contact";
import ExperienceCard from "../components/ExperienceCard";
import { motion } from "motion/react";

const AboutPage = () => {
  const educationData = {
    title: "Education",
    experiences: [
      {
        role: "B.Voc in Web Development",
        duration: "2019 - 2022",
        location: "YMCA University",
        points: [
          "3-year Bachelor's degree focused on frontend and full-stack development.",
          "Learned core web technologies",
        ],
      },
      {
        role: "Senior Secondary (Class 12th) Non-Medical - Science",
        duration: "2017",
        location: "Aggarwal Public School",
        points: [
          "Studied Physics, Chemistry and Mathematics.",
          "Developed strong analytical thinking and problem-solving skills",
        ],
      },
    ],
  };

  const brandingKiteData = {
    title: "Brandingkite",
    subtitle: "full-service digital marketing agency",
    logo: BrandingKiteLogo,
    isReversed: true,
    experiences: [
      {
        role: "Junior Frontend Developer",
        duration: "Jan 2024 - May 2024",
        location: "Remote",
        points: [
          "Built a complete sales funnel for TQS Logistics using Reactand Redux Toolkit.",
          "Designed and developed reusable components with responsive layouts.",
          "Implemented page transitions and animations using Framer Motion and GSAP.",
          "Integrated forms using Formik with Yup validation.",
          "Worked in an agile team with cross-functional collaboration",
        ],
      },
    ],
  };

  const parallaxData = {
    title: "Parallax India",
    subtitle: "Parallax India is a creative agency",
    logo: parallax,
    experiences: [
      {
        role: "Frontend Development Intern",
        duration: "Oct 2024 - Nov 2024",
        location: "Remote",
        points: [
          "Assisted in debugging and enhancing UI components",
          "Collaborated with developers on building responsive user interfaces.",
        ],
      },
      {
        role: "Software Developer",
        duration: "Nov 2024 - Feb 2025",
        location: "Remote",
        points: [
          "Promoted from intern to Software Developer based on strong performance.",
          "Developed frontend features and optimized UI/UX using React and Tailwind CSS.",
        ],
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="flex items-end justify-center w-full h-[75dvh] lg:h-[90dvh] aboutHero">
        <div className="centerDiv relative lg:w-2/5 h-[60vh] bg-neutral-200 dark:bg-neutral-400 shadow-md bg-opacity-50 rounded-xl ">
          <motion.h2
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
            className="absolute z-10 -left-[5%] lg:-left-[25%] font-bold uppercase text-center -top-[15%] lg:-top-[35%] leading-none tracking-normal text-5xl lg:text-8xl font-Montserrat"
          >
            Meet the Developer
          </motion.h2>
          <motion.div
            initial={{
              filter: "blur(10px)",
              opacity: 0,
            }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="relative w-full h-full overflow-hidden"
          >
            <BlurCircle
              className={"-top-[40%] dark:bg-neutral-800 -left-20  bg-white"}
            />
            <img
              src={profile1Img}
              alt="Profile"
              className="relative z-20 object-cover w-full h-full rounded-xl"
            />
          </motion.div>
        </div>
      </div>
      <About />
      <div className="flex flex-col items-center w-full gap-10 font-Raleway">
        <h2 className="text-[4vmax] font-bold font-Montserrat">Experiences</h2>
        <div className="container flex flex-col flex-wrap justify-center w-full gap-8 md:gap-4 lg:flex-row h-fit">
          <ExperienceCard {...educationData} />
          <ExperienceCard {...brandingKiteData} />
          <ExperienceCard {...parallaxData} />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default AboutPage;
