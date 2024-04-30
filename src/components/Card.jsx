import React, { useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Card = () => {
  const products = [
    {
      productName: "FlowerPot",
      productUrl:
        "https://images.unsplash.com/photo-1710971228630-f59c4cb257a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productDiscription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo doloribus itaque commodi?",
      state: true,
    },
    {
      productName: "FlowerPot",
      productUrl:
        "https://images.unsplash.com/photo-1712693028986-6f0150a5e39a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productDiscription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo doloribus itaque commodi?",
      state: false,
    },
    {
      productName: "FlowerPot",
      productUrl:
        "https://images.unsplash.com/photo-1713458180041-a6f7a72c9707?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productDiscription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo doloribus itaque commodi?",
      state: true,
    },
    {
      productName: "FlowerPot",
      productUrl:
        "https://images.unsplash.com/photo-1710971228630-f59c4cb257a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productDiscription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo doloribus itaque commodi?",
      state: true,
    },
    {
      productName: "FlowerPot",
      productUrl:
        "https://images.unsplash.com/photo-1712693028986-6f0150a5e39a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productDiscription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo doloribus itaque commodi?",
      state: false,
    },
    {
      productName: "FlowerPot",
      productUrl:
        "https://images.unsplash.com/photo-1713458180041-a6f7a72c9707?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productDiscription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo doloribus itaque commodi?",
      state: true,
    },
  ];

  const [moveRight , setMoveRight] = useState(false)
  const [moveLeft , setMoveLeft] = useState(0)

  return (
    <div className="flex items-center ">
     <button
     onClick={()=>{
      setMoveLeft(moveLeft + 1)
      setMoveRight(false)
      console.log(moveLeft ,"setMoveLeft")
    }} 
     className="w-8 h-8 rounded-full border ring-white bg-white flex items-center justify-center">
        <FaCircleArrowLeft />
      </button>
      <div className="flex w-[500px] overflow-hidden">
      {products.map((product) => (
        <div
          className={`w-56 mx-3 shrink-0 ${moveRight ? "transition ease-in-out translate-x-24" : ""} ${moveLeft ? "transition ease-in-out -translate-x-24" : ""} ${
            product.state ? "bg-green-400" : "bg-red-400"
          } overflow-hidden rounded-lg flex flex-col gap-3`}
        >
          <div className="w-full h-44">
            <img
              className="object-cover w-full h-full"
              src={product.productUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3 p-2">
            <h4 className="text-sm font-bold">product name</h4>
            <p className="text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              doloribus itaque commodi?
            </p>
          </div>
        </div>
      ))}

      </div>

      <button 
      onClick={()=>{
        setMoveRight(prev => !prev)
        setMoveLeft(false)
        console.log(moveRight ,"moveRight")
      }} 
      className="w-8 h-8 rounded-full border ring-white bg-white flex items-center justify-center">
        <FaCircleArrowRight />
      </button>
    </div>
  );
};

export default Card;
