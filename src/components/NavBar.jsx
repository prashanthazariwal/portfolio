import React from "react";

const NavBar = () => {
  return (
    <div className="h-10 px-16 bg-slate-300 flex justify-between items-center ">
      <div className="w-14 h-10 flex items-center text-sm font-bold "> yo logo </div>
      <div className="flex justify-center items-center gap-4 ">
        <a href="" className="text-sm font-semibold ">
          Home
        </a>
        <a href="" className="text-sm font-semibold ">
          About
        </a>
        <a href="" className="text-sm font-semibold ">
          Contact
        </a>
      </div>
    </div>
  );
};

export default NavBar;
