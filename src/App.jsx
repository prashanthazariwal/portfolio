import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

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
      x: 100,
      delay: 0.3,
      duration: 0.4,
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
      {loading && (
        <div className="h-screen relative overflow-hidden">
          <div className="loader h-screen w-full bg-black flex flex-col gap-64 items-center absolute top-0 right-0">
            <div className="loader-top text-white w-full h-fit overflow-hidden text-center text-sm font-normal mt-4 capitalize font-ComicReliefRegular">
              <h5>design portfolio</h5>
              <h5 className="mt-1">&copy; 2025</h5>
            </div>
            <div className=" text-white overflow-hidden ">
              <div className="loader-center  md:text-6xl text-3xl font-semibold text-center w-fit overflow-hidden font-Raleway">
                Prashant{" "}
                <span className="text-green-600 italic font-ComicReliefRegular">
                  hazariwal
                </span>{" "}
                is a
              </div>
            </div>
            <div className="green-div absolute top-full h-full w-full bg-green-300 "></div>
          </div>
        </div>
      )}
      {!loading && (
        <div className="bg-neutral-100 min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow">
            <div className="relative w-full md:w-4/6 px-4 overflow-hidden md:mx-auto">
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </ErrorBoundary>
  );
}

export default App;
