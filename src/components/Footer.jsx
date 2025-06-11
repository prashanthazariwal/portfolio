import React, { useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { motion } from "motion/react";
import { toast } from "react-toastify";

const Footer = () => {
  const footerRef = useRef(null);
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [allEmails, setAllEmails] = useState([]);

  const socialLinks = [
    // { icon: <FaFacebook />, url: "#" },
    // { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaGithub />, url: "#" },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/prashant-hazariwal-71374b212/",
    },
  ];

  const navLinks = [
    { title: "Home", nav: "#Home" },
    { title: "About", nav: "#About" },
    { title: "Contact", nav: "#Contact" },
  ];

  return (
    <motion.footer
      ref={footerRef}
      id="footer"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-4 pb-4 overflow-hidden border-t border-green-600 shadow-md lg:w-4/6 md:w-5/6 md:mx-auto rounded-tr-3xl rounded-tl-3xl bg-neutral-100 dark:bg-neutral-900"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="mx-4 max-w-[100%]">
        <div className="flex flex-col justify-between w-full h-fit lg:flex-row lg:items-center">
          <h4 className="mt-4 text-sm font-medium leading-tight uppercase text-neutral-900 dark:text-neutral-100">
            want to create amazing <br />
            web /App experience
            <br />
            connect me at{" "}
          </h4>
          <h2 className="text-base leading-snug font-SpecialGothic md:text-3xl text-neutral-900 dark:text-neutral-100">
            <a
              href="mailto:prashanthazariwal999@gmail.com"
              aria-label="Send email to prashanthazariwal999@gmail.com"
            >
              prashanthazariwal999@gmail.com
            </a>
          </h2>
        </div>
        <div className="flex items-center mt-16 address w-fit h-fit">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            location :{" "}
          </h2>
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            {" "}
            &nbsp; India / Haryana / Faridabad
          </h4>
        </div>
        <div className="flex justify-between pt-4 text-sm border-t border-neutral-300 dark:border-neutral-600 text-neutral-500 dark:text-neutral-400">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Prashant Hazariwal All rights
            reserved.
          </p>
          <div
            className="flex space-x-6"
            role="navigation"
            aria-label="Social media links"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="transition-colors duration-300 transform text-neutral-900 dark:text-neutral-100 hover:text-green-600 dark:hover:text-green-400 hover:scale-110"
                aria-label={`Visit ${
                  link.url.includes("linkedin")
                    ? "LinkedIn"
                    : link.url.includes("github")
                    ? "GitHub"
                    : "Instagram"
                } profile`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
