import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import StickyHeader from "./components/StickyHeader";
import ClientModal from "./components/ClientModal";
import SmartDevelopment from "./components/SmartDevelopment";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white overflow-x-hidden">
      <StickyHeader onOpenModal={() => setIsModalOpen(true)} />
      <ClientModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Hero />
      <Marquee />
      <Services />
      <AboutUs />
      <Portfolio />
      <SmartDevelopment />
      <Footer />
    </main>
  );
};

export default App;
