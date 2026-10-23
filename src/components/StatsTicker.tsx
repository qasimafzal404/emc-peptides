import React from "react";
import { ShieldCheck, Snowflake, FileCheck2, Zap } from "lucide-react";

export function StatsTicker() {
  const metrics = [
    {
      icon: <FileCheck2 className="w-5 h-5 text-cyan-400" />,
      label: "INDEPENDENT ANALYSIS",
      val: "HPLC + ESI-MS",
      desc: "Every single lot matched to an authentic third-party report.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      label: "ASSAY THRESHOLD",
      val: "≥ 99.0% PURITY",
      desc: "High-resolution chromatogram baseline with trace-free sequence.",
    },
    {
      icon: <Snowflake className="w-5 h-5 text-cyan-400" />,
      label: "COLD INTEGRITY",
      val: "LYOPHILIZED PUCK",
      desc: "Sub-zero vacuum dehydration under argon gas inert atmosphere.",
    },
    {
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      label: "DISPATCH VELOCITY",
      val: "24-48H FULFILLMENT",
      desc: "Dispatched direct from European laboratory distribution hubs.",
    },
  ];

  return (
    <section className="border-y border-slate-800 bg-slate-950/80 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="flex flex-col p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                {m.icon}
                <span className="text-[10px] font-mono tracking-widest text-slate-400">
                  {m.label}
                </span>
              </div>
              <div className="text-xl font-black text-white tracking-wide font-mono mb-1">
                {m.val}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
