import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "motion/react";
import BlurCircle from "../components/BlurCircle";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Naam zaroori hai";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email zaroori hai";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email address daalo";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message zaroori hai";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message kam se kam 10 characters ka hona chahiye";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Kuch errors hain, please check karein");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_xsvz73p",
        "template_0rqdeie",
        {
          title: "New Contact Form Submission",
          name: formData.name,
          message: formData.message,
          email: formData.email,
        },
        "a4wOHhNXjyxIccb9J"
      );

      toast.success("Message successfully bheja gaya!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Kuch error aa gaya, please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const ctaSlogan = "Is your Brand not making the impact you desire ?";
  const splitedtext = ctaSlogan.split(" ");

  return (
    <div
      id="contact"
      className="relative flex flex-col w-full gap-5 p-4 my-6 overflow-hidden shadow-sm md:my-20 h-fit rounded-xl"
    >
      <motion.div
        layoutId="project-background"
        className="absolute inset-0 rounded-lg [background-size:200px_200px] [background-image:linear-gradient(to_right,#e4e7e5_1px,transparent_1px),linear-gradient(to_bottom,#e4e7e5_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
      ></motion.div>
      <BlurCircle
        className={"-top-[30%]  -right-20  bg-white dark:bg-neutral-800"}
      />
      <div className="w-full text-justify md:w-2/3">
        {splitedtext.map((word, idx) => (
          <motion.span
            initial={{
              filter: "blur(10px)",
              opacity: 0,
            }}
            whileInView={{
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
            }}
            viewport={{
              once: "true",
            }}
            className={`inline-block uppercase text-4xl md:text-7xl font-SpecialGothic pl-2 ${
              idx === 2 ? "bg-black text-white " : ""
            }`}
            key={idx}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </div>
      <div className="flex flex-col-reverse items-center justify-between w-full p-4 md:items-end md:flex-row">
        <h3 className="relative flex gap-2 mt-3 text-base font-semibold capitalize font-Raleway">
          you can do it the glories way
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right-dashed "
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12h.5m3 0h1.5m3 0h6" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </h3>
        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex flex-col w-full gap-4 p-2 md:w-1/2 font-Raleway"
        >
          <div className="flex flex-col">
            <input
              className={`w-full p-2 mr-2 text-lg bg-transparent border-b border-black border-dashed outline-none focus:outline-none focus:border-black active:outline-none active:border-black placeholder:italic ${
                errors.name ? "border-red-500" : ""
              }`}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Naam likho"
              autoComplete="off"
            />
            {errors.name && (
              <span className="mt-1 text-sm text-red-500">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              className={`w-full p-2  mr-2 text-lg bg-transparent border-b border-black border-dashed outline-none focus:outline-none focus:border-black active:outline-none active:border-black placeholder:italic ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email daalo"
              autoComplete="off"
            />
            {errors.email && (
              <span className="mt-1 text-sm text-red-500">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col">
            <textarea
              className={`w-full p-2 mt-2 text-base bg-transparent border-b border-black border-dashed outline-none resize-none focus:outline-none focus:border-black active:outline-none active:border-black placeholder:italic ${
                errors.message ? "border-red-500" : ""
              }`}
              name="message"
              value={formData.message}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              rows={3}
              placeholder="Apna message yahan likho"
            />
            {errors.message && (
              <span className="mt-1 text-sm text-red-500">
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 mt-4 text-white transition-all bg-black rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Bhej raha hoon..." : "Message Bhejo"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
