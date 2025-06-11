import { div } from "motion/react-client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const Review = () => {
  const ref = useRef(null);
  const svg = (color) => (
    <svg
      className="icon icon-tabler icons-tabler-filled icon-tabler-star"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={color}
      stroke="none"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
        fill={color}
      />
    </svg>
  );
  const ReviewCards = [
    {
      stars: 4,
      Review:
        "Great work! The design and functionality are both impressive. Main honestly expect nahi kar raha tha ki itna smooth experience milega. UI bhi kaafi clean hai aur responsiveness bhi zabardast hai. I would definitely recommend this to others, aur future me bhi kaam karna pasand karunga.",
      Reviewer: "Amit Sharma",
    },
    {
      stars: 5,
      Review:
        "Bahut hi badiya kaam kiya hai! User experience top notch hai. Har ek feature ache se implement hua hai, aur koi bugs nahi mile. Communication bhi throughout project clear thi. Delivery time se pehle ho gaya, jo mujhe sabse zyada pasand aaya.",
      Reviewer: "Priya Singh",
    },
    {
      stars: 4,
      Review:
        "Kaafi accha kaam hai! Thoda scope hai improvement ka, par overall experience mast tha. Design modern hai aur performance bhi fast hai. Kuch choti choti cheezein aur polish ho sakti hain, lekin overall main kaafi khush hoon. Definitely recommend karunga.",
      Reviewer: "Rahul Verma",
    },
    {
      stars: 5,
      Review:
        "Amazing! Fast delivery and creative design. Highly satisfied. Mujhe laga tha ki thoda time lagega, lekin project time se pehle complete ho gaya. Suggestions bhi liye aur implement kiye. Support bhi milta raha jab bhi zarurat padi.",
      Reviewer: "Sneha Patel",
    },
    {
      stars: 4,
      Review:
        "Good job, communication bhi achhi thi. Will work again! Kaam ke beech mein regular updates milte rahe, aur har feedback ko seriously liya gaya. Thoda aur customization hota toh perfect hota, lekin overall experience bahut accha tha.",
      Reviewer: "Vikas Mehra",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["55% end", "end 120%"],
  });

  const getInitialTop = (idx) => {
    switch (idx) {
      case 0:
        return 50;
      case 1:
        return -10;
      case 2:
        return 20;
      case 3:
        return -65;
      case 4:
        return -100;
      default:
        return 0;
    }
  };

  const getInitialLeft = (idx) => {
    switch (idx) {
      case 0:
        return 4;
      case 1:
        return -40;
      case 2:
        return -50;
      case 3:
        return -20;
      case 4:
        return -50;
      default:
        return 0;
    }
  };

  const getInitialRotation = (idx) => {
    switch (idx) {
      case 0:
        return -3;
      case 1:
        return -7;
      case 2:
        return 4;
      case 3:
        return -3;
      case 4:
        return 10;
      default:
        return 0;
    }
  };

  const getCardTransforms = (idx) => {
    const initialTop = getInitialTop(idx);
    const initialLeft = getInitialLeft(idx);
    const initialRotation = getInitialRotation(idx);

    return {
      top: useTransform(scrollYProgress, [0, 1], [initialTop, 0]),
      left: useTransform(scrollYProgress, [0, 1], [initialLeft, 0]),
      transform: useTransform(
        scrollYProgress,
        [0, 1],
        [`rotate(${initialRotation}deg)`, "rotate(0deg)"]
      ),
    };
  };

  return (
    <div className="relative flex flex-col w-full px-4 py-8">
      <h3 className="text-sm font-medium text-center font-Raleway text-neutral-900 dark:text-neutral-200">
        Rating & Reviews
      </h3>
      <h2 className="text-4xl font-bold text-center capitalize font-Montserrat text-neutral-900 dark:text-neutral-200">
        Trusted by people
      </h2>

      <div
        ref={ref}
        className="flex flex-wrap justify-center w-full gap-5 mt-10 cards-container"
      >
        {ReviewCards.map((card, idx) => {
          return (
            <motion.div
              className={`card flex flex-col border dark:border-none justify-between h-80 p-3 rounded-3xl shadow-lg w-72 relative bg-white dark:bg-neutral-800/50  `}
              style={{
                ...getCardTransforms(idx),
                position: "relative",
                right: idx === 4 ? "-10px" : "auto",
              }}
              transition={{
                ease: "easeInOut",
              }}
              key={idx}
            >
              <div className="relative flex flex-col justify-between w-full h-full p-3 overflow-hidden rounded-xl backdrop-blur-md group">
                <div className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-100 bg-neutral-100/50 dark:bg-neutral-900 -z-10"></div>
                <img
                  src=""
                  className="bg-red-300 border rounded-full w-14 h-14"
                  alt=""
                />
                <p
                  className={`mb-4 text-xs font-medium font-Raleway text-justify text-neutral-700 dark:text-neutral-300`}
                >
                  {card.Review}
                </p>
              </div>
              <div className="flex justify-between w-full px-2 mt-4 text-sm">
                <span
                  className={`font-semibold  text-neutral-600 dark:text-neutral-100`}
                >
                  {card.Reviewer}
                </span>
                <div className="flex items-center mb-2 ">
                  {Array.from({ length: card.stars }).map((_, i) => (
                    <span key={i}>{svg("#171717")}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
