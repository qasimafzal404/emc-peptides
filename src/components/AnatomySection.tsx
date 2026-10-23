"use client";

import React from "react";
import Image from "next/image";

export function AnatomySection() {
  const callouts = [
    {
      num: "01",
      title: "Inert seal",
      desc: "Butyl stopper, low extractables",
      position: "top-left",
    },
    {
      num: "02",
      title: "Tamper-evident collar",
      desc: "Crimped aluminium, single use",
      position: "bottom-left",
    },
    {
      num: "03",
      title: "Legible by design",
      desc: "Batch, lot and fill date, fixed positions",
      position: "top-right",
    },
    {
      num: "04",
      title: "Dry, dark, sealed",
      desc: "10 mg lyophilized, nitrogen headspace",
      position: "bottom-right",
    },
  ];

  return (
    <section id="anatomy" className="relative py-24 lg:py-32 bg-[#070e1b] text-white overflow-hidden border-t border-white/5">
      {/* Background Starfield & Celestial Nebula Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-blue-950/40 via-cyan-950/15 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-2xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="w-6 h-[1px] bg-[#c59b27]" />
            <span className="text-xs font-mono tracking-widest uppercase font-semibold text-[#c59b27]">
              INSIDE THE VIAL
            </span>
            <span className="w-6 h-[1px] bg-[#c59b27]" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span>Anatomy of </span>
            <span className="text-[#e5b945]">Precision.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-lg mx-auto font-normal leading-relaxed pt-1">
            Every component of the packaging is engineered to eliminate degradation variables prior to laboratory reconstitution.
          </p>
        </div>

        {/* Desktop Interactive Orbital Universe Graphic (Hidden on mobile/tablet) */}
        <div className="hidden lg:block relative max-w-5xl mx-auto h-[620px]">
          
          {/* Animated Universe Orbital Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer faint celestial ring */}
            <div className="w-[580px] h-[580px] rounded-full border border-white/10 border-dashed cosmic-ring-1" />
            
            {/* Middle orbital ring with cyan tint */}
            <div className="w-[450px] h-[450px] rounded-full border border-cyan-500/20 cosmic-ring-2" />
            
            {/* Inner faint ring with gold accent dot */}
            <div className="w-[330px] h-[330px] rounded-full border border-amber-500/25 relative animate-pulse">
              <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]" />
            </div>
            
            {/* Center ambient glow circle */}
            <div className="w-[220px] h-[220px] rounded-full bg-cyan-500/10 blur-xl" />
          </div>

          {/* Center 3D Vial */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <div className="float-center transition-transform duration-500 hover:scale-105">
              <Image
                src="/emc-tesamorelin.png"
                alt="EMC Peptides Lyophilized Vial Anatomy"
                width={320}
                height={320}
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)] filter contrast-105"
              />
            </div>
            <div className="mt-4 font-mono text-[10px] tracking-widest uppercase text-slate-400 bg-[#0d1b2e]/80 border border-white/10 px-3 py-1 rounded-full">
              EMC LOT SPECS · PURITY VERIFIED
            </div>
          </div>

          {/* Callout 01: Top Left - Inert Seal */}
          <div className="absolute top-12 left-6 xl:left-12 max-w-[260px] text-right z-30 group">
            <div className="flex items-center justify-end gap-2 text-xs font-mono text-[#c59b27] font-semibold mb-1">
              <span>01</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              Inert seal
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Butyl stopper, low extractables
            </p>
            {/* SVG Leader Line to Stopper */}
            <svg
              className="absolute top-6 left-[270px] w-48 h-24 overflow-visible pointer-events-none"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M 0 0 L 100 0 L 150 45"
                className="stroke-amber-400/50"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle cx="150" cy="45" r="4" className="fill-amber-400" />
            </svg>
          </div>

          {/* Callout 02: Bottom Left - Tamper Evident Collar */}
          <div className="absolute bottom-20 left-6 xl:left-12 max-w-[260px] text-right z-30 group">
            <div className="flex items-center justify-end gap-2 text-xs font-mono text-[#c59b27] font-semibold mb-1">
              <span>02</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              Tamper-evident collar
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Crimped aluminium, single use
            </p>
            {/* SVG Leader Line to Collar */}
            <svg
              className="absolute bottom-6 left-[270px] w-48 h-24 overflow-visible pointer-events-none"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M 0 24 L 95 24 L 140 -20"
                className="stroke-amber-400/50"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle cx="140" cy="-20" r="4" className="fill-amber-400" />
            </svg>
          </div>

          {/* Callout 03: Top Right - Legible by Design */}
          <div className="absolute top-12 right-6 xl:right-12 max-w-[260px] text-left z-30 group">
            <div className="flex items-center justify-start gap-2 text-xs font-mono text-[#c59b27] font-semibold mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]" />
              <span>03</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              Legible by design
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Batch, lot and fill date, fixed positions
            </p>
            {/* SVG Leader Line to Label */}
            <svg
              className="absolute top-6 right-[270px] w-48 h-24 overflow-visible pointer-events-none"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M 190 0 L 90 0 L 40 55"
                className="stroke-cyan-400/50"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle cx="40" cy="55" r="4" className="fill-cyan-400" />
            </svg>
          </div>

          {/* Callout 04: Bottom Right - Dry, Dark, Sealed */}
          <div className="absolute bottom-20 right-6 xl:right-12 max-w-[260px] text-left z-30 group">
            <div className="flex items-center justify-start gap-2 text-xs font-mono text-[#c59b27] font-semibold mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]" />
              <span>04</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              Dry, dark, sealed
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              10 mg lyophilized, nitrogen headspace
            </p>
            {/* SVG Leader Line to Base / Cake */}
            <svg
              className="absolute bottom-6 right-[270px] w-48 h-24 overflow-visible pointer-events-none"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M 190 24 L 95 24 L 50 -15"
                className="stroke-cyan-400/50"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle cx="50" cy="-15" r="4" className="fill-cyan-400" />
            </svg>
          </div>

        </div>

        {/* Mobile & Tablet Layout (Gracefully stacked cards with cosmic centerpiece) */}
        <div className="lg:hidden space-y-10">
          {/* Centered Vial with Cosmic Ring */}
          <div className="relative flex flex-col items-center justify-center py-6">
            <div className="w-[280px] h-[280px] rounded-full border border-white/10 border-dashed absolute animate-spin-slow pointer-events-none" />
            <div className="w-[210px] h-[210px] rounded-full border border-cyan-500/25 absolute pointer-events-none" />
            <Image
              src="/emc-tesamorelin.png"
              alt="EMC Peptides Vial Anatomy"
              width={220}
              height={220}
              className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] relative z-10"
            />
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {callouts.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0c1626]/80 border border-white/10 rounded-xl p-5 hover:border-amber-400/40 transition-all"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#c59b27] font-semibold mb-1">
                  <span>{item.num}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
