import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import LocomotiveScroll from "locomotive-scroll";
import Chalendar from "./components/Chalendar/Chalendar.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import { Toaster } from "react-hot-toast";
import AboutPage from "./pages/AboutPage.jsx";

const locomotiveScroll = new LocomotiveScroll();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="Shedular" element={<Chalendar />} />
      <Route path="work" element={<Work />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster />
    </HelmetProvider>
  </React.StrictMode>
);
