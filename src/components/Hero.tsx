"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, FileText, FlaskConical, Sparkles, Activity } from "lucide-react";

interface HeroProps {
  onAddToCart: (productId: string) => void;
  onSelectProduct: (productId: string) => void;
}

export function Hero({ onAddToCart, onSelectProduct }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#07090e] via-[#090e17] to-[#07090e]">
      {/* Background radial glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Pill Header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>OCTOBER 2026 BATCH DISPATCH ACTIVE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              SYNTHESIZED FOR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 cyan-text-glow">
                UNCOMPROMISING
              </span>{" "}
              PRECISION.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              EMC Peptides delivers analytically verified research compounds with certified chromatographic purity profiles, vacuum lyophilization, and transparent lot documentation.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>&ge; 99.0% HPLC Standard</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                <FlaskConical className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Sterile Lyophilized</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg col-span-2 sm:col-span-1">
                <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Lot HPLC/MS On File</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#compounds"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Browse Research Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#coa-lookup"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Verify Batch Records</span>
              </a>
            </div>
          </div>

          {/* Right Hero Column: 3D Mockup Specimen Showcase */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Ambient glow container */}
            <div className="relative group w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Animated outer cyber ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 scale-105 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border border-dashed border-cyan-400/10 scale-95" />
              
              {/* High-impact Mockup Image */}
              <div className="relative z-10 w-full h-full p-4 flex items-center justify-center filter drop-shadow-[0_20px_45px_rgba(0,240,255,0.25)]">
                <Image
                  src="/emc-tesamorelin.png"
                  alt="EMC Peptides Tesamorelin 5 MG Research Compound Vial Mockup"
                  width={420}
                  height={420}
                  priority
                  className="object-contain max-h-[380px] w-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Floating Analytical Spec Card */}
              <div className="absolute -bottom-4 -left-4 sm:left-0 z-20 glass-panel p-3.5 rounded-xl border border-cyan-500/40 shadow-2xl max-w-[210px] space-y-1.5 animate-bounce-subtle">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400 font-semibold">SPECIMEN SPEC</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                </div>
                <div className="font-mono text-xs font-bold text-white">TESAMORELIN 5 MG</div>
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span>Purity:</span>
                  <span className="font-bold text-cyan-300">99.4% HPLC</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span>Lot Ref:</span>
                  <span className="font-mono text-slate-400">EMC-7402-A</span>
                </div>
              </div>

              {/* Floating Quick Action Badge */}
              <div className="absolute -top-3 -right-3 z-20 glass-panel px-3 py-2 rounded-xl border border-cyan-500/30 flex items-center gap-2 shadow-xl">
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                <div className="text-left">
                  <div className="text-[9px] font-mono text-slate-400 uppercase">Status</div>
                  <div className="text-xs font-bold text-white">In Laboratory Stock</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
