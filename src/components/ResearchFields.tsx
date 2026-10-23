import React from "react";
import { ArrowRight, Flame, ShieldAlert, Brain, Sparkles } from "lucide-react";

export function ResearchFields() {
  const fields = [
    {
      code: "FIELD / 01",
      title: "Metabolic & Growth",
      desc: "Metabolic signalling and growth-factor research pathways.",
      icon: <Flame className="w-5 h-5 text-cyan-400" />,
      tag: "14 Compounds",
    },
    {
      code: "FIELD / 02",
      title: "Repair & Recovery",
      desc: "Focused tools for cellular repair, tissue restoration and recovery research.",
      icon: <ShieldAlert className="w-5 h-5 text-cyan-400" />,
      tag: "18 Compounds",
    },
    {
      code: "FIELD / 03",
      title: "Cognitive & Mood",
      desc: "Compounds dedicated to neurochemical and cognitive inquiry models.",
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      tag: "9 Compounds",
    },
    {
      code: "FIELD / 04",
      title: "Longevity & Cellular",
      desc: "Cellular senescence and longevity-focused analytical research tools.",
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      tag: "12 Compounds",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#07080b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-2">
          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            Research catalogue / 04 fields
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Choose a research direction.
          </h2>
          <p className="text-slate-400 text-sm">
            Four focused collections. Every compound held to the same lot-level documentation standard.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fields.map((f, idx) => (
            <a
              key={idx}
              href="#bestsellers"
              className="aminohaus-card rounded-xl p-6 flex flex-col justify-between space-y-8 hover:border-cyan-500/40 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-[10px] font-mono text-slate-400 font-semibold tracking-wider">
                    {f.code}
                  </span>
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {f.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono text-cyan-400">{f.tag}</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
