"use client";

import { motion } from "framer-motion";
import { TEAM } from "@/constants/content";
import { HUDCorner } from "./HUD";

export default function Team() {
  return (
    <section id="team" className="border-b border-krea-border relative">
      <HUDCorner position="tl" />
      <HUDCorner position="tr" />

      <div className="p-4 border-b border-krea-border bg-white/[0.03] flex justify-between items-center">
        <h3 className="text-xs uppercase tracking-widest text-krea-light-gray">Fig 4.0 // Architect Roster</h3>
        <span className="text-xs text-krea-gray uppercase tracking-widest hidden md:block">
          Section 03 : Personnel
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((member, index) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-krea-border last:border-r-0 hover:bg-white/[0.02] transition-all min-h-[480px]"
          >
            <div className="absolute top-0 right-0 p-4 text-[0.6rem] text-krea-gray group-hover:text-krea-white transition-colors tracking-widest">
              ARCHITECT
            </div>

            {/* Avatar Placeholder */}
            <div className="w-full aspect-square bg-white/[0.02] border border-neutral-800 mb-6 flex items-center justify-center group-hover:border-krea-white transition-colors relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 blueprint-grid-bg" />
              <div className="text-4xl text-krea-gray opacity-30 font-bold group-hover:opacity-50 group-hover:text-krea-white transition-all">
                ?
              </div>
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-neutral-700 group-hover:border-krea-white transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-neutral-700 group-hover:border-krea-white transition-colors" />
            </div>

            <div>
              <h4 className="text-xl font-bold uppercase text-krea-white mb-1 group-hover:translate-x-1 transition-transform">
                {member.name}
              </h4>
              <span className={`text-[0.65rem] ${member.roleColor || 'text-krea-gray'} block mb-4 tracking-widest uppercase border-b border-neutral-800 pb-2`}>
                {member.role}
              </span>
              <p className="text-xs text-krea-gray leading-relaxed">
                {member.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
