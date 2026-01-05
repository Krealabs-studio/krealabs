"use client";

import { motion } from "framer-motion";
import { HUDCorner } from "./HUD";

const services = [
  {
    id: "01",
    title: "Hard Tech",
    items: ["/ CAD Engineering", "/ Industrial Design", "/ Hardware Integration"],
    icon: <div className="w-1 h-1 bg-krea-white" />,
  },
  {
    id: "02",
    title: "Soft Tech",
    items: ["/ Artificial Intelligence", "/ Full-Stack Web", "/ Digital Innovation"],
    icon: (
      <div className="flex gap-1">
        <div className="w-0.5 h-2 bg-krea-white" />
        <div className="w-0.5 h-3 bg-krea-white" />
        <div className="w-0.5 h-1 bg-krea-white" />
      </div>
    ),
  },
  {
    id: "03",
    title: "The Lab",
    items: ["/ Rapid Prototyping", "/ Process Optimization", "/ R&D Consulting"],
    icon: <div className="w-3 h-3 border border-krea-white rounded-full" />,
  },
];

export default function Services() {
  return (
    <section className="border-b border-krea-border relative">
      <HUDCorner position="tl" />
      <HUDCorner position="tr" />
      <div className="p-4 border-b border-krea-border bg-white/[0.03] flex justify-between items-center">
        <h3 className="text-xs uppercase tracking-widest text-krea-light-gray">Fig 2.0 // Service Protocols</h3>
        <span className="text-xs text-krea-gray uppercase tracking-widest hidden md:block">
          Section 02 : Capabilities
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service) => (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: parseInt(service.id) * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 md:min-h-[400px] flex flex-col justify-between border-b md:border-b-0 md:border-r border-krea-border last:border-r-0 hover:bg-white/[0.02] transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 text-xs text-krea-gray group-hover:text-krea-white transition-colors">
              {service.id}
            </div>
            <div>
              <div className="w-8 h-8 border border-neutral-700 flex items-center justify-center mb-6 group-hover:bg-krea-white group-hover:border-krea-white transition-all">
                <div className="group-hover:invert transition-all">{service.icon}</div>
              </div>
              <h3 className="text-xl uppercase font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h3>
              <div className="h-[1px] w-8 bg-neutral-700 group-hover:w-16 group-hover:bg-krea-white transition-all duration-500 mb-4" />
            </div>
            <ul className="text-sm text-krea-gray flex flex-col gap-2 group-hover:text-krea-light-gray transition-colors">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
