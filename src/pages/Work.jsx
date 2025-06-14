import React, { useState, useEffect } from "react";
import ProjectSection from "../sections/ProjectSection";
import Contact from "../sections/Contact";
import { motion, useScroll } from "motion/react";
import project1Img from "../assets/images/obeys-agency-clone.webp";
import project2Img from "../assets/images/travel-website.webp";
import project3Img from "../assets/images/awwarded-website.webp";
import project4Img from "../assets/images/modernHeroSection.webp";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: project1Img,
      top: "50%",
      left: "40%",
      isActive: false,
    },
    {
      url: project2Img,
      top: "30%",
      left: "35%",
      isActive: false,
    },
    {
      url: project3Img,
      top: "40%",
      left: "50%",
      isActive: false,
    },
    {
      url: project4Img,
      top: "60%",
      left: "30%",
      isActive: false,
    },
    {
      url: project1Img,
      top: "70%",
      left: "50%",
      isActive: false,
    },
  ]);

  // Add preloading logic
  useEffect(() => {
    const preloadImages = () => {
      const imageUrls = [project1Img, project2Img, project3Img, project4Img];
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };
    preloadImages();
  }, []);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    console.log(Math.floor(data * 100));
    const imageShow = (array) => {
      setImages((prev) =>
        prev.map((item, idx) =>
          array.indexOf(idx) == -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    };
    switch (Math.floor(data * 100)) {
      case 1:
        imageShow([]);
        break;
      case 3:
        imageShow([0]);
        break;
      case 5:
        imageShow([0, 1]);
        break;
      case 7:
        imageShow([0, 1, 2]);
        break;
      case 8:
        imageShow([0, 1, 2, 3]);
        break;
      case 9:
        imageShow([0, 1, 2, 3, 4]);
        break;
    }
  });
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "react", name: "React Projects" },
    { id: "react-native", name: "React Native" },
    { id: "html-css", name: "HTML/CSS" },
  ];

  return (
    <div className="">
      <div className="flex items-center relative justify-center w-full h-[45dvh] md:h-[90vh] leading-none aboutProjects">
        {images.map(
          (img, idx) =>
            img.isActive && (
              <motion.div
                style={{ top: img.top, left: img.left, opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                }}
                className="absolute z-30 w-32 h-20 overflow-hidden -translate-x-1 -translate-y-1/2 border shadow-lg opacity-0 md:h-40 md:w-52 rounded-xl "
              >
                <img
                  key={idx}
                  src={img.url}
                  className={` object-cover object-left w-full h-full  `}
                  alt=""
                />
              </motion.div>
            )
        )}

        <motion.h2
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
          className="text-[3rem] md:text-[20vh] font-Montserrat uppercase"
        >
          Projects
        </motion.h2>
      </div>
      <h1 className="mb-8 text-xl font-bold text-center md:text-3xl font-Montserrat">
        Explore my Work
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-8 md:gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-2 md:px-4 py-2 text-xs md:text-lg rounded-full transition-all ${
              selectedCategory === category.id
                ? "bg-black text-white"
                : "bg-gray-100 dark:bg-neutral-900 dark:text-neutral-600 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <ProjectSection selectedCategory={selectedCategory} spliceValue={3} />
      <Contact />
    </div>
  );
};

export default Work;
