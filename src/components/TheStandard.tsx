import React from "react";
import Image from "next/image";
import { Layers, ShieldCheck, Microscope, Binary } from "lucide-react";

export function TheStandard() {
  const steps = [
    {
      num: "01",
      title: "Compound & Strength",
      subtitle: "Immediate Arm's-Length Recognition",
      desc: "Bold high-contrast identification readable through lab safety visors, under cold glovebox lighting, and within deep freeze storage racks.",
    },
    {
      num: "02",
      title: "Analytical Purity Assay",
      subtitle: "Verified Specification Threshold",
      desc: "Every vial clearly states the tested HPLC purity mark and research-only qualification before secondary packaging is sealed.",
    },
    {
      num: "03",
      title: "Direct Lot Record Binding",
      subtitle: "Traceable Chain of Custody",
      desc: "The alphanumeric lot number printed on the label maps 1-to-1 to independent chromatogram and mass spectrometry documentation.",
    },
  ];

  return (
    <section id="standard" className="py-20 lg:py-28 bg-[#07090e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            VIAL ARCHITECTURE & INTEGRITY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            The Hierarchy Doesn’t Move.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Compounds change. Strengths change. Lots change. Their position on the vial never does. Every EMC Peptides vial conforms to an identical scientific visual standard.
          </p>
        </div>

        {/* 3 Step Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-8 relative flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-4xl font-black font-mono text-cyan-400/80 group-hover:text-cyan-300 transition-colors">
                    {s.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:shadow-[0_0_8px_#00f0ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{s.title}</h3>
                  <div className="text-xs font-mono text-cyan-400 mb-3">{s.subtitle}</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Box */}
        <div className="glass-panel rounded-2xl p-8 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-black font-mono text-cyan-400 mb-1">&ge; 99.0%</div>
              <div className="text-sm font-semibold text-white">HPLC Assay Guaranteed</div>
              <p className="text-xs text-slate-400 mt-1">Refined using preparative gradient chromatography</p>
            </div>
            <div className="pt-4 md:pt-0 md:pl-6">
              <div className="text-3xl font-black font-mono text-cyan-400 mb-1">&lt; 0.1 EU/mg</div>
              <div className="text-sm font-semibold text-white">Endotoxin Controlled</div>
              <p className="text-xs text-slate-400 mt-1">LAL-tested to exceed standard laboratory thresholds</p>
            </div>
            <div className="pt-4 md:pt-0 md:pl-6">
              <div className="text-3xl font-black font-mono text-cyan-400 mb-1">100%</div>
              <div className="text-sm font-semibold text-white">Argon Backfilled</div>
              <p className="text-xs text-slate-400 mt-1">Prevents oxidative degradation of sensitive residues</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
