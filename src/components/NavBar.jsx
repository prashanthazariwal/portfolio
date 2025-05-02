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
        className="h-fit py-2 w-3/5  z-50 mx-auto px-2 flex justify-between mix-blend-difference items-center sticky inset-0"
      >
        {/* <div className="w-full h-full bg-neutral-200 absolute inset-0 blur-lg -z-10"></div> */}
        <div className=" nav w-fit h-10 flex items-center text-sm font-bold ">
          <NavLink
            to="home"
            className={({ isActive }) => {
              return `${
                isActive ? "nav text-sm font-bold" : "nav text-sm font-semibold"
              } mix-blend-difference`;
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
        <div className="flex justify-center bg-neutral-100 z-[999] opacity-1 rounded-xl p-4 items-center gap-4 ">
          {[
            { to: "work" },
            { to: "about" },
            { to: "shedular" },
            { to: "contact" },
          ].map((elm, index) => (
            <NavLink
              key={index}
              to={elm.to}
              className={({ isActive }) => {
                return `${
                  isActive
                    ? "nav text-sm font-bold"
                    : "nav text-sm font-semibold"
                } mix-blend-multiply`;
              }}
            >
              {elm.to}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
