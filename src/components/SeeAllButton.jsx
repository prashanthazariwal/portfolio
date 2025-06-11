import React from "react";
import { cn } from "../lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const SeeAllButton = ({ className, text }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  if (!isHomePage) return null;

  const navigateHandler =()=>{
    if(text == "learn more"){
    navigate("/about")
    }else if(text == "see all"){
      navigate("/work")
    }
  }
  return (
    <button
      onClick={navigateHandler}
      className={cn(
        "text-sm font-semibold uppercase text-neutral-800 hover:text-neutral-600 transition-colors",
        className
      )}
    >
      {text}
    </button>
  );
};

export default SeeAllButton;
