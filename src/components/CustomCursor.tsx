"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Update grid highlight CSS variables
      const gridHighlight = document.getElementById("grid-highlight");
      if (gridHighlight) {
        gridHighlight.style.setProperty("--x", `${e.clientX}px`);
        gridHighlight.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      <div
        id="grid-highlight"
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{
          background: `radial-gradient(circle 400px at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.05), transparent)`,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white" />
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white" />
      </motion.div>
    </>
  );
}
