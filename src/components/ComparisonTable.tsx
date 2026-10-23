"use client";

import React from "react";
import { Check, X, ShieldCheck } from "lucide-react";

export function ComparisonTable() {
  const rows = [
    {
      feature: "Purity reporting",
      emc: "Exact batch value",
      other: "Specification only",
    },
    {
      feature: "Independent analysis",
      emc: "Every batch",
      other: "Periodic or in-house",
    },
    {
      feature: "Documentation",
      emc: "COA + chromatogram",
      other: "On request",
    },
    {
      feature: "Traceability",
      emc: "1:1 lot match",
      other: "Generic label",
    },
    {
      feature: "Shipment protection",
      emc: "Optional, at checkout",
      other: "Carrier claim only",
    },
    {
      feature: "Catalogue",
      emc: "10 vetted compounds",
      other: "Hundreds of variants",
    },
  ];

  return (
    <section id="difference" className="py-24 lg:py-32 bg-[#f4f1ea] text-[#11161d] border-t border-[#e2dcd0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header with Floating Transparency Badge */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-12 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#9a782a]" />
              <span className="text-xs font-mono tracking-widest uppercase font-semibold text-[#9a782a]">
                WHY EMC PEPTIDES
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#11161d]">
              The Difference, <br className="sm:hidden" />
              Line by Line<span className="text-[#9a782a]">.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4a5568] max-w-xl font-normal leading-relaxed">
              Same molecules. Different paperwork. <span className="font-semibold text-[#11161d]">We choose better.</span>
            </p>
          </div>

          {/* Built on Transparency Callout Card matching Screenshot 4 */}
          <div className="bg-white rounded-2xl p-5 border border-[#e2dcd0] shadow-xs flex items-center gap-4 max-w-sm">
            <div className="w-11 h-11 rounded-xl bg-[#0d211a] text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#9a782a]">
                BUILT ON TRANSPARENCY
              </div>
              <div className="text-xs text-[#334155] leading-snug font-medium pt-0.5">
                Batch-level documentation for every claim.
              </div>
            </div>
          </div>
        </div>

        {/* Clean Comparison Matrix Table matching Screenshot 4 */}
        <div className="rounded-2xl border border-[#e2dcd0] bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#e2dcd0]">
                  <th className="py-5 px-6 w-1/3 text-xs font-mono uppercase tracking-wider text-[#64748b]">
                    FEATURE
                  </th>
                  <th className="py-5 px-6 w-1/3 bg-[#0d211a] text-white">
                    <div className="text-sm font-bold tracking-tight">EMC Peptides</div>
                    <div className="text-[10px] font-mono text-[#c59b27] uppercase tracking-wider font-semibold">
                      ★ RECOMMENDED
                    </div>
                  </th>
                  <th className="py-5 px-6 w-1/3 text-sm font-bold text-[#11161d]">
                    Other sources
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0ede6] text-sm">
                {rows.map((r, idx) => (
                  <tr key={idx} className="hover:bg-[#faf8f5] transition-colors">
                    {/* Feature name */}
                    <td className="py-4 px-6 font-medium text-[#11161d]">
                      {r.feature}
                    </td>

                    {/* EMC Peptides Advantage */}
                    <td className="py-4 px-6 bg-[#f4f7f4] border-x border-[#e2ebe2] text-[#0d211a] font-semibold">
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0 stroke-[2.5]" />
                        <span>{r.emc}</span>
                      </div>
                    </td>

                    {/* Other Sources Disadvantage */}
                    <td className="py-4 px-6 text-[#64748b]">
                      <div className="flex items-center gap-2.5">
                        <X className="w-4 h-4 text-rose-500/80 shrink-0 stroke-[2.5]" />
                        <span>{r.other}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Verify Batch Banner matching Screenshot 4 */}
        <div className="mt-8 p-6 rounded-2xl bg-[#ece8df] border border-[#ded8cb] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0d211a] text-white flex items-center justify-center font-bold text-xs font-mono shrink-0">
              E
            </div>
            <div>
              <span className="font-bold text-[#11161d] text-sm">We document everything.</span>
              <span className="text-xs text-[#4a5568] block sm:inline sm:ml-2">
                Know exactly what is in every vial.
              </span>
            </div>
          </div>

          <a
            href="#coa"
            className="px-6 py-3 rounded-full bg-[#0d211a] hover:bg-[#1a4033] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-sm shrink-0 cursor-pointer"
          >
            VERIFY YOUR BATCH →
          </a>
        </div>

      </div>
    </section>
  );
}
