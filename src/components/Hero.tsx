"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onExplore: () => void;
  onAddToCart: () => void;
}

export function Hero({ onExplore, onAddToCart }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#f4f1ea] text-[#11161d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: AminoHaus Style Typography */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Gold rule + Tag */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#9a782a]" />
              <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-[#9a782a]">
                RESEARCH USE ONLY
              </span>
            </div>

            {/* Massive Bold Title */}
            <h1 className="text-6xl sm:text-7xl lg:text-[88px] font-extrabold tracking-tight text-[#11161d] leading-[0.95]">
              Precision, <br />
              Refined.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#4a5568] max-w-xl font-normal leading-relaxed pt-2">
              EMC Peptides delivers carefully sourced research compounds with transparent quality standards and uncompromising presentation.
            </p>

            {/* Pill Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#bestsellers"
                className="px-7 py-3.5 rounded-full bg-[#0d211a] hover:bg-[#15342a] text-white font-medium text-sm transition-all tracking-wide flex items-center gap-2 group shadow-sm"
              >
                <span>Explore Compounds</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#coa"
                className="px-7 py-3.5 rounded-full bg-[#eae5db] hover:bg-[#dfd9cd] text-[#11161d] font-medium text-sm transition-all border border-[#d6cfc1]"
              >
                View certificates
              </a>
            </div>
          </div>

          {/* Right Column: Three Staggered 3D Vials (Image 1 Style) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            <div className="relative w-full max-w-[460px] h-[360px] sm:h-[420px] flex items-center justify-center">
              
              {/* Left Angled Vial (Terracotta/Red tone) */}
              <div className="absolute left-2 sm:left-6 -bottom-2 z-10 w-[170px] sm:w-[210px] float-left opacity-90 transition-transform duration-500 hover:scale-105 cursor-pointer filter hue-rotate-[140deg] contrast-105">
                <Image
                  src="/emc-tesamorelin.png"
                  alt="EMC Compound Left"
                  width={210}
                  height={210}
                  className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)]"
                />
              </div>

              {/* Right Angled Vial (Navy/Slate tone) */}
              <div className="absolute right-2 sm:right-6 -bottom-2 z-10 w-[170px] sm:w-[210px] float-right opacity-90 transition-transform duration-500 hover:scale-105 cursor-pointer filter hue-rotate-[210deg] contrast-105">
                <Image
                  src="/emc-tesamorelin.png"
                  alt="EMC Compound Right"
                  width={210}
                  height={210}
                  className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)]"
                />
              </div>

              {/* Center Primary Vial (Cyan/Blue EMC Tesamorelin Foreground) */}
              <div
                onClick={onAddToCart}
                className="relative z-20 w-[210px] sm:w-[250px] float-center cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/emc-tesamorelin.png"
                  alt="EMC Peptides Tesamorelin 5 MG Mockup"
                  width={260}
                  height={260}
                  priority
                  className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.28)]"
                />
              </div>

              {/* Floor Shadow */}
              <div className="absolute bottom-2 w-72 h-8 bg-black/15 rounded-full blur-xl pointer-events-none" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
