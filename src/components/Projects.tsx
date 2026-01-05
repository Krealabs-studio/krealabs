"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/constants/content";
import { Crosshairs, TechCoords } from "./HUD";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-krea-border relative overflow-hidden">
      <Crosshairs />
      <TechCoords position="custom" value="Y-AXIS" className="top-1/2 right-[-15px] rotate-90" />
      
      <div className="p-4 border-b border-krea-border bg-white/[0.03]">
        <h3 className="text-xs uppercase tracking-widest text-krea-light-gray">Fig 3.0 // Active Operations</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 border-b md:border-b-0 md:border-r border-krea-border last:border-r-0 hover:bg-white/[0.02] transition-all group"
          >
            <span className={`text-[0.65rem] ${project.statusColor || 'text-krea-gray'} block mb-4 tracking-[0.2em] uppercase`}>
              {project.status}
            </span>
            <h3 className="text-xl font-bold uppercase mb-2 text-krea-white group-hover:text-krea-red transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-krea-gray mb-6 leading-relaxed">
              {project.description}
            </p>
            <a
              href={project.link}
              className="text-[0.65rem] uppercase tracking-widest text-krea-light-gray group-hover:text-krea-white border-b border-transparent group-hover:border-krea-white pb-1 transition-all inline-block"
            >
              {project.linkText}
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
