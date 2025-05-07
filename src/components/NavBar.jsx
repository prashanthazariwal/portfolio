import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

const NavBar = () => {
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
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="h-fit py-2 md:w-3/5 w-full  z-50 md:mx-auto px-5 flex justify-center md:justify-between  items-center sticky inset-0 "
      >
        {/* <div className="w-full h-full bg-neutral-200 absolute inset-0 blur-lg -z-10"></div> */}
        <div className=" nav hidden z-50 bg-neutral-100 px-2 py-1 w-fit rounded-xl h-10 md:flex justify-center items-center text-sm font-bold shadow-md">
          <NavLink
            to="home"
            className={({ isActive }) => {
              return `${
                isActive ? "nav text-sm font-bold" : "nav text-sm font-semibold"
              }`;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
            </svg>
          </NavLink>
        </div>
        <div className="flex w-fit justify-center bg-neutral-100 shadow-md font-Montserrat z-[999] bg-opacity-100 rounded-xl px-2 items-center gap-1 ">
          {[
            { to: "work" },
            { to: "about" },
            { to: "event" },
            { to: "contact" },
          ].map((elm, index) => (
            <NavLink
              key={index}
              to={elm.to}
              className={({ isActive }) => {
                return `${
                  isActive
                    ? "nav text-sm font-bold text-neutral-900"
                    : "nav text-sm font-semibold text-neutral-600"
                } mix-blend-multiply w-16`;
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                className="w-full h-full flex items-center justify-center py-2 capitalize"
              >
                {elm.to}
              </motion.div>
            </NavLink>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
