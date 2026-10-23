import React from "react";
import Image from "next/image";

export function AnatomySection() {
  const parts = [
    {
      num: "01",
      title: "Inert seal",
      desc: "Chlorobutyl elastomeric stopper with ultra-low extractables to safeguard molecular stability.",
    },
    {
      num: "02",
      title: "Tamper-evident collar",
      desc: "Crimped anodized aluminium collar engineered for single-use integrity verification.",
    },
    {
      num: "03",
      title: "Legible by design",
      desc: "Batch number, lot identification, and fill date placed in permanently fixed reading positions.",
    },
    {
      num: "04",
      title: "Dry, dark, sealed",
      desc: "Precision lyophilized cake preserved under high-vacuum argon inert headspace.",
    },
  ];

  return (
    <section id="anatomy" className="py-20 lg:py-28 bg-[#07080b] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            Inside the vial
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Anatomy of Precision.
          </h2>
          <p className="text-slate-400 text-sm">
            Every component of the packaging is engineered to eliminate degradation variables prior to laboratory reconstitution.
          </p>
        </div>

        {/* 2 Column Grid: Visual & Callouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 4 Step Spec List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {parts.map((p, idx) => (
              <div
                key={idx}
                className="aminohaus-card rounded-xl p-6 space-y-3 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-2xl font-black font-mono text-cyan-400">
                    {p.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Mockup Close-up */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-square rounded-2xl bg-gradient-to-b from-[#0c0f17] to-[#07080b] border border-white/10 p-6 flex items-center justify-center shadow-2xl">
              <div className="floating-vial">
                <Image
                  src="/emc-tesamorelin.png"
                  alt="Vial Anatomy"
                  width={280}
                  height={280}
                  className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,240,255,0.3)]"
                />
              </div>
              <div className="absolute bottom-4 text-center font-mono text-[10px] text-slate-500">
                EMC RESEARCH SPECIMEN · 5 MG CAKE
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
