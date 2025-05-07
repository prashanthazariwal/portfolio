import React, { useRef, useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [allEmails, setAllEmails] = useState([]);

  useGSAP(() => {
    gsap.from("#footer", {
      y: 100,
      scrollTrigger: {
        trigger: "#footer",
        start: "top bottom",
        end: "top 80%",
        scrub: 1,
      },
    });

    gsap.from(".footer-section", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#footer",
        start: "top bottom",
      },
    });
  });

  useEffect(() => {
    const links = footerRef.current.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, { y: -3, duration: 0.2, ease: "power2.out" });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(link, { y: 0, duration: 0.2, ease: "power2.out" });
      });
    });

    const form = formRef.current;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      gsap.to(form, { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 });
    });
  }, []);

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
    <footer
      ref={footerRef}
      id="footer"
      className="md:w-3/5 md:mx-auto bg-neutral-100 shadow-md rounded-tr-3xl border-t border-green-600 rounded-tl-3xl pt-10 pb-4 px-4  overflow-hidden"
    >
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div id="Contact" className="footer-section space-y-6 ">
            <h4 className="text-xl font-medium font-ComicReliefRegular">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.nav}
                    className="text-neutral-600 hover:text-neutral-900 transition-colors duration-300 relative group"
                  >
                    {link.title}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="footer-section space-y-6">
            <h4 className="text-xl font-medium font-ComicReliefRegular">
              Connect
            </h4>
          </div> */}
          <div className="footer-section space-y-6">
            <h4 className="text-xl font-medium font-ComicReliefRegular">
              Let's Talk
            </h4>
            <p className="w-full text-justify font-semibold text-neutral-700 ">
              If you need assistance with your work , feel free to reach out to
              me , and let's have a chat.
            </p>
            <form
              ref={formRef}
              onSubmit={(e) => {
                e.preventDefault();
                setAllEmails((prev) => [...prev, email]);
                toast.success("email saved");
                setEmail("");
              }}
              className="flex flex-col space-y-3"
            >
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-green-200 font-bold text-neutral-600 px-6 py-3 rounded-md hover:bg-green-300 hover:text-white transition-colors duration-300 transform hover:scale-105"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="mt-16 pt-4 border-t border-neutral-300 flex justify-between text-neutral-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Prashant Hazariwal All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-neutral-900 hover:text-green-600 transition-colors duration-300 transform hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
