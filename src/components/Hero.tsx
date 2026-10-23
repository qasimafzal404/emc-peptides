"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onExplore: () => void;
  onAddToCart: () => void;
}

export function Hero({ onExplore, onAddToCart }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-36 bg-[#07080b]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: AminoHaus Style Typography */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>LABORATORY INQUIRY PROTOCOL</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Precision, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">
                Refined.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              EMC Peptides delivers carefully sourced research compounds with transparent quality standards and uncompromising presentation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#bestsellers"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white hover:bg-slate-200 text-slate-950 font-semibold text-sm transition-all tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 group"
              >
                <span>Explore Compounds</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#coa"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View certificates</span>
              </a>
            </div>

            {/* Micro specs */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>≥99.0% HPLC Assay</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Argon Backfilled Cake</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Published Lot COA</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Floating Mockup in Loop */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Radial Cyan Glow Behind Vial */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/0 rounded-full blur-2xl pointer-events-none scale-90" />
              
              {/* 3D Floating Mockup Image with Infinite Loop Animation */}
              <div className="relative z-10 floating-vial cursor-pointer" onClick={onAddToCart}>
                <Image
                  src="/emc-tesamorelin.png"
                  alt="EMC Peptides Tesamorelin 5 MG Mockup"
                  width={420}
                  height={420}
                  priority
                  className="object-contain max-h-[380px] w-auto filter drop-shadow-[0_20px_35px_rgba(0,240,255,0.3)] transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Pulsating 3D Floor Shadow */}
              <div className="absolute bottom-6 w-48 h-6 bg-cyan-400/25 rounded-full blur-xl vial-shadow pointer-events-none" />

              {/* Floating Spec Tag Overlay */}
              <div className="absolute bottom-2 -left-2 z-20 px-3.5 py-2 rounded-xl bg-slate-950/90 border border-white/10 shadow-2xl backdrop-blur-md text-left font-mono">
                <div className="text-[10px] text-cyan-400 font-semibold tracking-wider">FEATURED COMPOUND</div>
                <div className="text-xs font-bold text-white">TESAMORELIN · 5 MG</div>
                <div className="text-[10px] text-slate-400">Purity: 99.4% HPLC · Lot EMC-7402-A</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
