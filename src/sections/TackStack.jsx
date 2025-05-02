import React from "react";
import { Card, HoverEffect } from "../components/ui/card-hover-effect";

const TackStack = () => {
  const items = [
    {
      title: "Html",
      description:
        "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.",
    },
    {
      title: "Css",
      description:
        "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML",
    },
    {
      title: "Javascript",
      description:
        "JavaScript is a scripting or programming language that allows you to implement complex features on web pages ",
    },
    {
      title: "Tailwind css",
      description:
        "Tailwind CSS is a utility-first CSS framework. It provides a vast collection of pre-defined CSS classes that can be used directly in HTML to style web pages without writing custom CSS.",
    },
    {
      title: "React",
      description:
        "React is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more seamless. It is maintained by Meta and a community of individual developers and companies.",
    },
    {
      title: "Redux",
      description:
        "Redux is a predictable state container for JavaScript applications, often used with libraries like React. It helps manage the application's state in a centralized and consistent manner, making it easier to maintain and debug, especially as applications grow in complexity.",
    },
    {
      title: "Gsap",
      description:
        "GSAP (GreenSock Animation Platform) is a powerful and versatile JavaScript library for creating animations. It's known for its performance, flexibility, and ease of use, allowing developers to animate various aspects of web pages, including HTML elements, CSS properties, and even SVG graphics.",
    },
    {
      title: "Motion",
      description:
        "Motion for React, formerly known as Framer Motion, is a powerful and versatile animation library specifically designed for React applications.",
    },
  ];
  return (
    <div className="w-full">
      <HoverEffect items={items} />
    </div>
  );
};

export default TackStack;
