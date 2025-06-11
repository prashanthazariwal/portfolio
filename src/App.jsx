import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import ErrorBoundary from "./components/ErrorBoundary";
import useScrollToTop from "./hooks/useScrollToTop";
import { Helmet } from "react-helmet-async";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useScrollToTop();

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from(".loader-center", {
      x: 250,
      delay: 0.3,
      duration: 0.5,
    });
    tl.to(".loader-top", {
      opacity: 0,
      y: -10,
      delay: 0.4,
      duration: 0.3,
      ease: "back.inOut",
    });
    tl.to(".loader-center", {
      opacity: 0,
      y: -15,
      delay: 0.4,
      duration: 0.6,
      ease: "back.inOut",
    });
    tl.to(".loader", {
      height: 0,
      duration: 1.2,
      ease: "expo.inOut",
    });
    tl.to(".green-div", {
      height: 0,
      top: 0,
      duration: 0.4,
      ease: "expo.inOut",
    });
  }, []);

  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy();
  }, []);

  return (
    <ErrorBoundary>
      <Helmet>
        <html lang="en" />
        <title>Prashant Hazariwal - Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Prashant Hazariwal - Web Developer and Designer"
        />
        <meta
          name="keywords"
          content="web developer, designer, portfolio, Prashant Hazariwal, frontend developer"
        />
        <meta property="og:title" content="Prashant Hazariwal - Portfolio" />
        <meta
          property="og:description"
          content="Portfolio website of Prashant Hazariwal - Web Developer and Designer"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://portfolio-pink-nine-80.vercel.app/"
        />
      </Helmet>
      {loading && (
        <div className="relative h-screen overflow-hidden">
          <div className="absolute top-0 right-0 flex flex-col items-center w-full h-screen gap-64 bg-black loader">
            <div className="w-full mt-4 overflow-hidden text-sm font-normal text-center text-white capitalize loader-top h-fit font-ComicReliefRegular">
              <h5>design portfolio</h5>
              <h5 className="mt-1">&copy; 2025</h5>
            </div>
            <div className="overflow-hidden text-white ">
              <div className="overflow-hidden text-3xl font-semibold text-center loader-center md:text-6xl w-fit font-Raleway">
                Prashant{" "}
                <span className="mr-2 italic text-green-600 font-ComicReliefRegular">
                  hazariwal
                </span>{" "}
              </div>
            </div>
            <div className="absolute w-full h-full bg-green-300 green-div top-full "></div>
          </div>
        </div>
      )}
      {!loading && (
        <div className="flex flex-col min-h-screen transition-colors duration-300 bg-neutral-100 dark:bg-neutral-900">
          <NavBar />
          <main className="flex-grow">
            <div className="relative w-full px-4 overflow-hidden lg:w-4/6 md:w-5/6 md:mx-auto">
              <Outlet />
            </div>
            <Footer />
          </main>
        </div>
      )}
    </ErrorBoundary>
  );
}

export default App;
