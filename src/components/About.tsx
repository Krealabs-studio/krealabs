"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-12 border-b border-krea-border">
      <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-krea-border p-6 flex items-center justify-center">
        <span className="text-xs text-krea-gray uppercase md:-rotate-90 whitespace-nowrap tracking-widest">
          Section 01 : Manifesto
        </span>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:col-span-9 p-8 md:p-16"
      >
        <h2 className="text-2xl md:text-4xl uppercase font-bold text-krea-white mb-6 leading-tight">
          From scratch to scale. <br />
          <span className="text-krea-gray">
            We are a one-stop engineering lab building complex ideas from the ground up.
          </span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8 mt-12 text-xs text-krea-light-gray">
          <div className="flex-grow border-l border-krea-border/30 pl-4">
            <strong className="text-krea-white block mb-2 uppercase tracking-widest">{"// MISSION"}</strong>
            To bridge the gap between abstract innovation and tangible industrial application.
          </div>
          <div className="flex-grow border-l border-krea-border/30 pl-4">
            <strong className="text-krea-white block mb-2 uppercase tracking-widest">{"// STATUS"}</strong>
            Ready for deployment. All systems nominal.
          </div>
        </div>
      </motion.div>
    </section>
  );
}
