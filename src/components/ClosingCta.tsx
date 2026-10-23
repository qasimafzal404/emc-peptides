import React from "react";
import { ArrowRight, FileText } from "lucide-react";

export function ClosingCta() {
  return (
    <section className="py-24 bg-[#07080b] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
          Begin
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Research Begins With <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">
            Better Standards.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Assayed by independent certified laboratories and published against verified lot numbers. Orders are dispatched with tracking within one to two business days.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#bestsellers"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white hover:bg-slate-200 text-slate-950 font-semibold text-sm transition-all tracking-wide flex items-center justify-center gap-2 group"
          >
            <span>Explore Compounds</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#coa"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-all flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>See the certificates</span>
          </a>
        </div>

        <div className="pt-8 text-xs font-mono text-slate-500">
          Precision research compounds, documented batch by batch.
        </div>
      </div>
    </section>
  );
}
