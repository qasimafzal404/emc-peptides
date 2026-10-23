"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function ResearchFields() {
  return (
    <section
      id="fields"
      className="relative py-24 lg:py-32 bg-[#061510] text-white border-t border-emerald-950/60 overflow-hidden"
    >
      {/* Geometric Technical Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Screenshot 1 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#c59b27]" />
              <span className="text-xs font-mono tracking-widest uppercase font-semibold text-[#c59b27]">
                RESEARCH CATALOGUE / 04 FIELDS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              Choose a <br />
              research <br />
              direction<span className="text-[#c59b27]">.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-md font-normal leading-relaxed">
            Four focused collections. Every compound held to the same lot-level documentation standard.
          </p>
        </div>

        {/* Asymmetric Bento Grid matching Screenshot 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* FIELD 01: Hero Big Left Card (Spans 6 cols on lg, full height) */}
          <div
            onClick={() => {
              document.getElementById("bestsellers")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#3a5255] via-[#243639] to-[#121f21] border border-white/10 flex flex-col justify-between relative group cursor-pointer overflow-hidden shadow-2xl transition-all duration-300 hover:border-emerald-500/40"
          >
            {/* Top Bar: Field Tag & Arrow */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-slate-300">
                FIELD / 01
              </span>
              <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#061510] transition-colors">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </div>

            {/* Standing 3D Vial in Center */}
            <div className="relative py-10 sm:py-14 flex items-center justify-center">
              <div className="w-[240px] sm:w-[280px] transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/emc-tesamorelin.png"
                  alt="GLP-3 RT 10MG Metabolic Compound"
                  width={280}
                  height={280}
                  className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] filter contrast-105"
                />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Metabolic &amp; Growth
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Metabolic signalling and growth-factor research.
              </p>
            </div>
          </div>

          {/* Right Column (Spans 6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            
            {/* FIELD 02: Repair & Recovery Card */}
            <div
              onClick={() => {
                document.getElementById("bestsellers")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#34445c] via-[#222e3f] to-[#141b26] border border-white/10 flex flex-col justify-between relative group cursor-pointer overflow-hidden shadow-xl transition-all duration-300 hover:border-cyan-500/40"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-slate-300">
                  FIELD / 02
                </span>
                <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#061510] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              {/* Standing 3D Vial */}
              <div className="relative py-4 flex items-center justify-center">
                <div className="w-[170px] sm:w-[190px] transition-transform duration-500 group-hover:scale-105 filter hue-rotate-[190deg]">
                  <Image
                    src="/emc-tesamorelin.png"
                    alt="BPC-157 10MG Repair Compound"
                    width={190}
                    height={190}
                    className="object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.45)]"
                  />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Repair &amp; Recovery
                </h3>
                <p className="text-xs text-slate-300 font-light">
                  Focused tools for repair and recovery research.
                </p>
              </div>
            </div>

            {/* Subgrid: FIELD 03 & FIELD 04 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* FIELD 03: Cognitive & Mood */}
              <div
                onClick={() => {
                  document.getElementById("bestsellers")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-3xl p-6 bg-gradient-to-b from-[#4e3a50] via-[#322334] to-[#1c121e] border border-white/10 flex flex-col justify-between relative group cursor-pointer overflow-hidden shadow-lg transition-all duration-300 hover:border-purple-400/40"
              >
                <div className="flex items-center justify-between relative z-10 mb-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-slate-300">
                    FIELD / 03
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#061510] transition-colors">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>

                <div className="relative py-2 flex items-center justify-center">
                  <div className="w-[130px] transition-transform duration-500 group-hover:scale-105 filter hue-rotate-[220deg]">
                    <Image
                      src="/emc-tesamorelin.png"
                      alt="Selank 10MG Cognitive Compound"
                      width={140}
                      height={140}
                      className="object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.4)]"
                    />
                  </div>
                </div>

                <div className="relative z-10 mt-2 space-y-0.5">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Cognitive &amp; Mood
                  </h3>
                  <p className="text-[11px] text-slate-300 font-light leading-snug">
                    Compounds for cognitive and mood research.
                  </p>
                </div>
              </div>

              {/* FIELD 04: Longevity & Cellular */}
              <div
                onClick={() => {
                  document.getElementById("bestsellers")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-3xl p-6 bg-gradient-to-b from-[#334b4b] via-[#203131] to-[#121c1c] border border-white/10 flex flex-col justify-between relative group cursor-pointer overflow-hidden shadow-lg transition-all duration-300 hover:border-teal-400/40"
              >
                <div className="flex items-center justify-between relative z-10 mb-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-slate-300">
                    FIELD / 04
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#061510] transition-colors">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>

                <div className="relative py-2 flex items-center justify-center">
                  <div className="w-[130px] transition-transform duration-500 group-hover:scale-105 filter hue-rotate-[45deg]">
                    <Image
                      src="/emc-tesamorelin.png"
                      alt="SS-31 50MG Longevity Compound"
                      width={140}
                      height={140}
                      className="object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.4)]"
                    />
                  </div>
                </div>

                <div className="relative z-10 mt-2 space-y-0.5">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Longevity &amp; Cellular
                  </h3>
                  <p className="text-[11px] text-slate-300 font-light leading-snug">
                    Cellular and longevity-focused research tools.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
