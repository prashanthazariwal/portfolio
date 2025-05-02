import { useEffect, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

  return (
    <>
      {loading && (
        <div className="h-screen relative overflow-hidden">
          <div className="loader h-screen w-full bg-black flex flex-col gap-64 items-center absolute top-0 right-0">
            <div className="loader-top text-white w-full h-fit overflow-hidden text-center text-sm font-semibold mt-4 capitalize">
              <h5>design portfolio</h5>
              <h5>&copy; 2024</h5>
            </div>
            <div className=" text-white overflow-hidden ">
              <div className="loader-center text-6xl text-center w-fit overflow-hidden">
                Prashant{" "}
                <span className="text-green-600 italic">hazariwal</span> is a
              </div>
            </div>
            <div className="green-div absolute top-full h-full w-full bg-green-300 "></div>
          </div>
        </div>
      )}
      {!loading && (
        <>
          <NavBar />
          <div className="w-3/5 px-4 overflow-hidden mx-auto">
          <Outlet />
          </div>
         
        </>
      )}
    </>
  );
}

export default App;
