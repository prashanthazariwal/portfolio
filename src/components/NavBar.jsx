import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const NavBar = () => {
  const [hovered, setHovered] = useState(null);
  const [scroll, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const { scrollY } = useScroll();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("latest-->",latest)
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* navbar */}
      <motion.div
        initial={{
          y: -10,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          width: windowWidth > 768 ? (scroll ? "65%" : "66.666667%") : "100%",
        }} //66.666667
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="sticky inset-0 z-50 flex items-center justify-between w-full px-3 py-2 h-fit lg:w-4/6 md:w-5/6 md:mx-auto md:px-5"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="z-50 items-center justify-center px-2 py-1 text-xs font-bold border shadow-md h-9 dark:border-neutral-600 nav bg-neutral-100 dark:bg-neutral-800 w-fit rounded-xl md:flex">
          <NavLink
            to="home"
            aria-label="Home page"
            className={({ isActive }) => {
              return `${
                isActive
                  ? "nav text-xs font-bold text-neutral-900 dark:text-white"
                  : "nav text-xs font-semibold text-neutral-600 dark:text-white"
              }`;
            }}
          >
            <motion.svg
              whileTap={{
                scale: 0.95,
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-home"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </motion.svg>
          </NavLink>
        </div>
        <div className="flex w-fit justify-center border dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 font-Montserrat shadow-md z-[999] bg-opacity-100 rounded-xl px-2 items-center gap-1">
          {[
            { to: "work" },
            { to: "about" },
            { to: "event", className: "hidden md:flex" },
            { to: "#contact", isAnchor: true },
          ].map((elm, index) =>
            elm.isAnchor ? (
              <a
                key={index}
                href={elm.to}
                className="relative w-16 text-xs font-semibold nav text-neutral-600 dark:text-white"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(elm.to)
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                {hovered == index && (
                  <motion.span
                    layoutId="nav-bg"
                    className="absolute inset-0 w-full h-full rounded-md bg-neutral-200 dark:bg-neutral-700"
                  ></motion.span>
                )}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onTap={() => {
                    setHovered(index);
                    setTimeout(() => setHovered(null), 300);
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  className="z-10 flex items-center justify-center w-full h-full py-2 font-semibold capitalize text-neutral-700 dark:text-white"
                >
                  {elm.to.replace("#", "")}
                </motion.div>
              </a>
            ) : (
              <NavLink
                key={index}
                to={elm.to}
                className={({ isActive }) => {
                  return `${
                    isActive
                      ? "nav text-xs font-bold text-neutral-900 dark:text-white"
                      : "nav text-xs font-semibold text-neutral-600 dark:text-white"
                  } w-16 relative ${elm.className || ""}`;
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered == index && (
                  <motion.span
                    layoutId="nav-bg"
                    className="absolute inset-0 w-full h-full rounded-md bg-neutral-200 dark:bg-neutral-700"
                  ></motion.span>
                )}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onTap={() => {
                    setHovered(index);
                    setTimeout(() => setHovered(null), 300);
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  className="z-10 flex items-center justify-center w-full h-full py-2 capitalize text-neutral-700 dark:text-white"
                >
                  {elm.to}
                </motion.div>
              </NavLink>
            )
          )}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2 transition-colors rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-700"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
