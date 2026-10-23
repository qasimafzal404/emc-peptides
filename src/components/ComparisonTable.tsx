import React from "react";
import { Check, X, ShieldAlert } from "lucide-react";

export function ComparisonTable() {
  const rows = [
    {
      feature: "Purity reporting",
      emc: "Exact batch value (e.g. 99.4%)",
      other: "Specification only (≥98%)",
    },
    {
      feature: "Independent analysis",
      emc: "Every batch tested by 3rd-party lab",
      other: "Periodic, historical, or in-house only",
    },
    {
      feature: "Chromatogram documentation",
      emc: "Full RP-HPLC spectrum + ESI-MS on file",
      other: "Available only on specialized request",
    },
    {
      feature: "Lot Traceability",
      emc: "1:1 verifiable lot code printed on vial",
      other: "Generic pooled label with no document link",
    },
    {
      feature: "Atmospheric Protection",
      emc: "Argon backfilled + Chlorobutyl stopper",
      other: "Standard ambient rubber stopper",
    },
    {
      feature: "Curated Catalog",
      emc: "Vetted compounds with full analytical sheets",
      other: "Mass-sourced variants with variable quality",
    },
  ];

  return (
    <section id="difference" className="py-20 lg:py-28 bg-[#07080b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching AminoHaus */}
        <div className="max-w-3xl mb-16 space-y-2">
          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            Why EMC Peptides
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            The Difference, Line by Line.
          </h2>
          <p className="text-slate-400 text-base font-light">
            Same molecules. Different paperwork. <span className="text-white font-medium">We choose better.</span>
          </p>
          <p className="text-xs font-mono text-slate-500 pt-1">
            Built on transparency · Batch-level documentation for every claim.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono uppercase text-slate-400">
                <th className="py-4 px-4 w-1/3">Feature</th>
                <th className="py-4 px-4 w-1/3 text-cyan-400 bg-cyan-950/20 border-x border-cyan-500/20 font-bold">
                  EMC Peptides (Recommended)
                </th>
                <th className="py-4 px-4 w-1/3 text-slate-500">Other sources</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {rows.map((r, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 font-semibold text-white">
                    {r.feature}
                  </td>
                  <td className="py-4 px-4 text-cyan-300 font-medium bg-cyan-950/20 border-x border-cyan-500/20">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{r.emc}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-400">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-slate-600 shrink-0" />
                      <span>{r.other}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300">
            <span className="font-bold text-white">We document everything.</span> Know exactly what is in every vial before unboxing.
          </div>
          <a
            href="#coa"
            className="px-5 py-2.5 rounded-lg bg-white hover:bg-slate-200 text-slate-950 text-xs font-bold tracking-wide transition-all shrink-0"
          >
            Verify your batch &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
