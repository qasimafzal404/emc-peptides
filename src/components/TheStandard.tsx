"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function TheStandard() {
  return (
    <section className="py-24 lg:py-32 bg-[#f4f1ea] text-[#11161d] border-t border-[#e2dcd0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Typography & 3 Steps */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#11161d] leading-[1.05]">
                The system <br />
                doesn’t move<span className="text-[#9a782a]">.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#4a5568] font-normal leading-relaxed pt-4 max-w-lg">
                Compounds change. Strengths change. Lots change. Their position never does. Every EMC Peptides vial follows the same hierarchy—clear at arm&apos;s length, under gloves, and in cold storage.
              </p>
            </div>

            {/* 3 Step Breakdown in Row matching Screenshot 3 */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[#e2dcd0]">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#9a782a] font-bold block">01</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#11161d] leading-snug">
                  Compound + strength
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#64748b]">
                  Primary identification
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#9a782a] font-bold block">02</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#11161d] leading-snug">
                  Purity
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#64748b]">
                  Status at a glance
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#9a782a] font-bold block">03</span>
                <h4 className="text-xs sm:text-sm font-bold text-[#11161d] leading-snug">
                  Lot record
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#64748b]">
                  Document match
                </p>
              </div>
            </div>

            {/* Action Button & Sub-note */}
            <div className="space-y-3 pt-2">
              <a
                href="#bestsellers"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0d211a] hover:bg-[#183b2f] text-white font-medium text-sm transition-all shadow-md group cursor-pointer"
              >
                <span>Explore compounds</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-[11px] font-mono text-[#64748b] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9a782a]" />
                <span>Fixed across compounds, strengths and lots</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3 Standing Vials Side-by-Side (Screenshot 3 Style) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-[#090d14] border border-black/10 overflow-hidden shadow-2xl">
              
              {/* 3 Color Slices / Pane Showcase */}
              <div className="grid grid-cols-3 min-h-[380px] sm:min-h-[440px] relative items-center justify-center">
                
                {/* Left Pane: Terracotta Red (IGF-1 LR3 1MG) */}
                <div className="h-full bg-gradient-to-b from-[#5c211d] to-[#1a0807] flex flex-col items-center justify-center p-3 relative group">
                  <div className="w-[110px] sm:w-[135px] filter hue-rotate-[145deg] contrast-105 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src="/emc-tesamorelin.png"
                      alt="IGF-1 LR3 1MG"
                      width={150}
                      height={150}
                      className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-white/50 tracking-wider">
                    IGF-1 LR3
                  </div>
                </div>

                {/* Center Pane: Graphite Black (PT-141 10MG) */}
                <div className="h-full bg-gradient-to-b from-[#262c36] to-[#0f1115] border-x border-white/10 flex flex-col items-center justify-center p-3 relative group">
                  <div className="w-[120px] sm:w-[145px] filter grayscale-[0.8] contrast-110 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src="/emc-tesamorelin.png"
                      alt="PT-141 10MG"
                      width={160}
                      height={160}
                      className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
                    />
                  </div>
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-white/50 tracking-wider">
                    PT-141
                  </div>
                </div>

                {/* Right Pane: Navy Blue (TB-500 10MG) */}
                <div className="h-full bg-gradient-to-b from-[#1b344e] to-[#09131d] flex flex-col items-center justify-center p-3 relative group">
                  <div className="w-[110px] sm:w-[135px] filter hue-rotate-[205deg] contrast-105 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src="/emc-tesamorelin.png"
                      alt="TB-500 10MG"
                      width={150}
                      height={150}
                      className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-white/50 tracking-wider">
                    TB-500
                  </div>
                </div>

              </div>

              {/* Bottom Card Footer Bar */}
              <div className="p-4 sm:p-5 bg-[#0d121b] border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#9a782a] font-semibold block">
                    RANGE STANDARD
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    Same read order, every fill.
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
