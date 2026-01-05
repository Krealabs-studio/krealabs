"use client";

import { SOCIALS } from "@/constants/content";
import { HUDCorner } from "./HUD";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="p-8 md:p-16 relative bg-white/[0.01]">
        <HUDCorner position="bl" />
        <HUDCorner position="br" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 relative z-10">
          {/* Intro & Action */}
          <div className="flex flex-col gap-8 items-start max-w-xl">
            <div>
              <h4 className="text-lg uppercase font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-krea-white" />
                Ready to initiate?
              </h4>
              <p className="text-krea-gray text-sm">
                Our engineers are standing by to architect your next breakthrough.
                <br />
                System resources are available.
              </p>
            </div>

            <a
              href="mailto:kelvinchoo96@gmail.com"
              className="px-8 py-4 border border-krea-border text-krea-light-gray hover:text-krea-white hover:bg-white/[0.02] transition-all uppercase text-[0.65rem] tracking-[0.2em] hover:border-krea-white inline-flex items-center gap-4 group"
            >
              <span className="w-1 h-1 bg-krea-white group-hover:bg-krea-red transition-colors" />
              Contact Protocol <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-krea-border pt-8 md:pt-0 md:pl-12 w-full md:w-auto">
            <div>
              <span className="block text-krea-white mb-2 uppercase text-[0.65rem] tracking-widest">
                // Connect
              </span>
              <p className="text-krea-gray text-[0.65rem] mb-4">Visual experiments stream.</p>
            </div>
            <div className="flex flex-col gap-3">
              {SOCIALS.map((social) => (
                <div key={social.handle}>
                  <span className="block text-krea-gray text-[0.65rem] mb-1">
                    {social.label} &rarr;
                  </span>
                  <a
                    href={social.url}
                    target="_blank"
                    className="text-krea-white hover:text-krea-light-gray border-b border-transparent hover:border-krea-white transition-all pb-1 text-sm"
                  >
                    {social.handle}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full max-w-7xl mx-auto px-4 pb-8 flex flex-col gap-12 text-[0.65rem] text-krea-gray uppercase tracking-widest mt-0 pt-12 border-t border-krea-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; 2026 Krea Labs // All Rights Reserved.</div>
          <div className="opacity-50">System Status: Nominal</div>
        </div>
      </footer>
    </>
  );
}
