"use client";

import { motion } from "framer-motion";
import { PARTNERS } from "@/constants/content";
import { HUDCorner, Crosshairs } from "./HUD";
import { ArrowRight } from "lucide-react";

export default function Partners() {
  return (
    <section id="partners" className="border-b border-krea-border relative overflow-hidden">
      <HUDCorner position="tl" />
      <HUDCorner position="tr" />
      <Crosshairs />
      
      <div className="p-4 border-b border-krea-border bg-white/[0.03]">
        <h3 className="text-xs uppercase tracking-widest text-krea-light-gray">Fig 5.0 // Strategic Alliances</h3>
      </div>

      <div className="w-full">
        {PARTNERS.map((partner, index) => (
          <motion.article
            key={partner.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 border-b border-krea-border last:border-b-0 hover:bg-white/[0.02] transition-all group"
          >
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Partner Identity Node */}
              <div className="flex-shrink-0 relative self-start">
                <div className="w-32 h-32 md:w-36 md:h-36 border border-neutral-800 flex items-center justify-center group-hover:border-krea-white transition-colors bg-krea-black">
                  <div className="flex flex-col gap-1 items-center transform scale-75 group-hover:scale-90 transition-transform">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-krea-white" />
                      <div className="w-3 h-3 border border-krea-white" />
                    </div>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 border border-krea-white" />
                      <div className="w-3 h-3 bg-neutral-600" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-[0.6rem] uppercase tracking-widest bg-krea-black px-2 text-krea-gray border border-neutral-800 whitespace-nowrap">
                  Node 0{index + 1}
                </div>
              </div>

              {/* Partner Data */}
              <div className="flex-grow text-center md:text-left pt-2">
                <h3 className="text-2xl md:text-3xl uppercase font-bold mb-2 text-krea-white tracking-tight group-hover:translate-x-1 transition-transform inline-block">
                  {partner.name}
                </h3>
                <div className="text-xs text-krea-red mb-6 tracking-widest uppercase font-bold flex items-center justify-center md:justify-start gap-2">
                  <span className="w-2 h-2 bg-krea-red rounded-full animate-pulse" />
                  {partner.role}
                </div>
                <p className="text-sm text-krea-gray group-hover:text-krea-light-gray transition-colors mb-8 max-w-2xl leading-relaxed">
                  {partner.description}
                </p>

                <div className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start border-t border-neutral-900 pt-6">
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${partner.name} website (opens in new tab)`}
                    className="text-[0.65rem] uppercase tracking-widest text-krea-white hover:text-krea-red transition-colors flex items-center gap-2"
                  >
                    [ Initiate Link ] <ArrowRight className="w-4 h-4" />
                  </a>

                  {partner.socials && (
                    <div className="flex gap-6 md:border-l md:pl-6 border-neutral-800">
                      {partner.socials.map((social) => (
                        <a
                          key={social.handle}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${partner.name} on ${social.handle} (opens in new tab)`}
                          className="text-[0.65rem] text-krea-gray hover:text-krea-white transition-colors uppercase tracking-wider"
                        >
                          {social.handle}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
