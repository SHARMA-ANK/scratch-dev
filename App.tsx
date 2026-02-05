import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white overflow-x-hidden">
      <Hero />
      <Marquee />
      <Services />
      <AboutUs />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
