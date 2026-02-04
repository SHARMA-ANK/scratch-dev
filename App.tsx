import React, { useEffect } from "react";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Services from "./components/Services";
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
      <SelectedWork />
      <Services />
      <Footer />
    </main>
  );
};

export default App;
