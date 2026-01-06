"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HUDCorner, Crosshairs, TechCoords } from "./HUD";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "[ We architect the future, one layer at a time. ]";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const scrollToLab = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      aboutSection.focus({ preventScroll: true });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center p-8 border-b border-krea-border overflow-hidden">
      <Crosshairs />
      <HUDCorner position="tl" />
      <HUDCorner position="tr" />
      <HUDCorner position="bl" />
      <HUDCorner position="br" />

      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-[-1] opacity-10 blueprint-grid-bg" />

      <div className="absolute top-0 left-0 p-4 text-[0.65rem] text-krea-light-gray uppercase tracking-widest">
        Fig 1.0 // Identity Matrix
        <div className="text-[0.6rem] text-krea-gray mt-1">NODE: ROOT</div>
      </div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-8xl font-bold tracking-tighter mb-4 uppercase mix-blend-difference text-center"
      >
        Krea Labs<span className="text-krea-red">.</span>
      </motion.h1>

      <p className="text-sm md:text-lg text-krea-light-gray max-w-xl mb-12 tracking-widest text-center h-6 md:h-8">
        {displayText}
        <span className="animate-pulse inline-block w-2 h-4 bg-krea-white ml-1 align-middle" />
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToLab}
        className="relative group px-8 py-4 border border-krea-white text-krea-white text-xs md:text-sm uppercase tracking-widest hover:bg-krea-white hover:text-krea-black transition-colors duration-300"
      >
        <span className="absolute top-0 left-0 w-1 h-1 bg-krea-white group-hover:w-full transition-all duration-300" />
        <span className="absolute bottom-0 right-0 w-1 h-1 bg-krea-white group-hover:w-full transition-all duration-300" />
        Enter the Lab
      </motion.button>
    </section>
  );
}
