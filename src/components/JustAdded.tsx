import React from "react";
import { ArrowUpRight } from "lucide-react";

export function JustAdded() {
  const newCompounds = [
    { name: "Snap 8 10mg", category: "Repair & Recovery", price: "From $29.99" },
    { name: "TA1 10mg", category: "Repair & Recovery", price: "From $39.99" },
    { name: "VIP 10mg", category: "Cognitive & Mood", price: "From $49.99" },
    { name: "Pinealon 10mg", category: "Cognitive & Mood", price: "From $49.99" },
    { name: "GLOW 70mg", category: "Repair & Recovery", price: "From $89.99" },
    { name: "KLOW 80mg", category: "Repair & Recovery", price: "From $99.99" },
    { name: "KPV 10mg", category: "Repair & Recovery", price: "From $39.99" },
    { name: "Mots-C", category: "Longevity & Cellular", price: "From $39.99" },
  ];

  return (
    <section className="py-20 bg-[#07080b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-1">
              Newly catalogued.
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Just Added
            </h2>
          </div>
          <a
            href="#bestsellers"
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors underline underline-offset-4"
          >
            View all compounds &rarr;
          </a>
        </div>

        {/* List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {newCompounds.map((item, idx) => (
            <div
              key={idx}
              className="aminohaus-card rounded-xl p-5 flex flex-col justify-between hover:border-cyan-500/30 transition-all cursor-pointer group"
            >
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h3>
              </div>
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/5">
                <span className="text-xs font-mono font-bold text-slate-200">
                  {item.price}
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
