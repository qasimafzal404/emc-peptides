"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, QrCode } from "lucide-react";

interface CoaDocument {
  id: string;
  name: string;
  lot: string;
  testedDate: string;
  purity: string;
  netPeptide: string;
  appearance: string;
  vialHue: string;
  retentionTime: string;
}

const COA_DATA: CoaDocument[] = [
  {
    id: "adamax",
    name: "Adamax 1032 - 10mg",
    lot: "EMC-ADX-1032",
    testedDate: "10/14/2026",
    purity: "99.54%",
    netPeptide: "83.2%",
    appearance: "Lyophilized white cake",
    vialHue: "hue-rotate-[220deg]",
    retentionTime: "14.28 min",
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin - 10mg",
    lot: "EMC-IPA-1002",
    testedDate: "10/09/2026",
    purity: "99.62%",
    netPeptide: "84.1%",
    appearance: "Lyophilized white cake",
    vialHue: "hue-rotate-[130deg]",
    retentionTime: "12.84 min",
  },
  {
    id: "ghk-kpv",
    name: "GHK-Cu / KPV - 70mg",
    lot: "EMC-GKPV-70",
    testedDate: "10/18/2026",
    purity: "99.73%",
    netPeptide: "81.9%",
    appearance: "Lyophilized blue cake",
    vialHue: "hue-rotate-[180deg]",
    retentionTime: "15.12 min",
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin - 5mg",
    lot: "EMC-TESA-50",
    testedDate: "10/04/2026",
    purity: "99.41%",
    netPeptide: "85.6%",
    appearance: "Lyophilized white cake",
    vialHue: "hue-rotate-[0deg]",
    retentionTime: "16.45 min",
  },
  {
    id: "bpc157",
    name: "BPC-157 - 10mg",
    lot: "EMC-BPC-10",
    testedDate: "10/12/2026",
    purity: "99.68%",
    netPeptide: "86.0%",
    appearance: "Lyophilized white cake",
    vialHue: "hue-rotate-[320deg]",
    retentionTime: "13.91 min",
  },
];

export function CoaLookup() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCoa = () => {
    setCurrentIndex((prev) => (prev === 0 ? COA_DATA.length - 1 : prev - 1));
  };

  const nextCoa = () => {
    setCurrentIndex((prev) => (prev === COA_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeDoc = COA_DATA[currentIndex];

  return (
    <section id="coa" className="py-24 lg:py-32 bg-[#f4f1ea] text-[#11161d] overflow-hidden border-t border-[#e2dcd0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Screenshot 2 */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#9a782a]" />
            <span className="text-xs font-mono tracking-widest uppercase font-semibold text-[#9a782a]">
              CERTIFICATE OF ANALYSIS
            </span>
            <span className="w-8 h-[1.5px] bg-[#9a782a]" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#11161d]">
            Every Lot, <br className="sm:hidden" />
            On Record<span className="text-[#9a782a]">.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4a5568] max-w-xl mx-auto font-normal">
            Independent third-party HPLC chromatography and quantitative purity assays published for every production run.
          </p>
        </div>

        {/* 3D Carousel / Fan-Out Container */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center min-h-[580px] sm:min-h-[660px]">
          
          {/* Left Navigation Arrow */}
          <button
            onClick={prevCoa}
            aria-label="Previous Certificate"
            className="absolute left-2 sm:left-6 z-30 w-11 h-11 rounded-full bg-[#0d211a] hover:bg-[#1a4033] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={nextCoa}
            aria-label="Next Certificate"
            className="absolute right-2 sm:right-6 z-30 w-11 h-11 rounded-full bg-[#0d211a] hover:bg-[#1a4033] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Left Angled Ghost Sheet (Perspective depth) */}
          <div className="hidden lg:block absolute left-8 w-[380px] h-[520px] bg-white/70 rounded-2xl border border-black/10 shadow-lg transform -rotate-6 scale-90 blur-[1px] opacity-60 pointer-events-none select-none p-6">
            <div className="h-4 w-28 bg-slate-200 rounded mb-4" />
            <div className="h-2 w-full bg-slate-100 rounded mb-2" />
            <div className="h-2 w-3/4 bg-slate-100 rounded mb-6" />
            <div className="h-28 w-full bg-slate-50 border border-slate-200 rounded mb-4" />
          </div>

          {/* Right Angled Ghost Sheet (Perspective depth) */}
          <div className="hidden lg:block absolute right-8 w-[380px] h-[520px] bg-white/70 rounded-2xl border border-black/10 shadow-lg transform rotate-6 scale-90 blur-[1px] opacity-60 pointer-events-none select-none p-6">
            <div className="h-4 w-28 bg-slate-200 rounded mb-4" />
            <div className="h-2 w-full bg-slate-100 rounded mb-2" />
            <div className="h-2 w-3/4 bg-slate-100 rounded mb-6" />
            <div className="h-28 w-full bg-slate-50 border border-slate-200 rounded mb-4" />
          </div>

          {/* Centerpiece Certificate Sheet matching Screenshot 2 */}
          <div className="relative z-20 w-full max-w-[480px] bg-white rounded-2xl border border-black/15 shadow-2xl p-6 sm:p-8 space-y-5 transition-all duration-300">
            
            {/* Certificate Header */}
            <div className="flex items-start justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
                  ILS
                </div>
                <div>
                  <div className="text-xs font-bold tracking-tight text-slate-900 font-mono">
                    EMC ANALYTICAL LABS
                  </div>
                  <div className="text-[9px] text-slate-500 font-mono">
                    San Diego Facility · ISO/IEC 17025
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
                  Report ID
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">
                  {activeDoc.lot}
                </span>
              </div>
            </div>

            {/* Document Title & Pass Pill */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Certificate of Analysis
                </h3>
                <p className="text-xs font-mono text-slate-500">
                  Sample: {activeDoc.name}
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-mono text-[10px] font-bold tracking-wider flex items-center gap-1 shadow-xs">
                <CheckCircle2 className="w-3 h-3" />
                PASS
              </span>
            </div>

            {/* Compound Specifications Box */}
            <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] font-mono">
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">Lot Number</span>
                <span className="font-semibold text-slate-800">{activeDoc.lot}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">Assayed Date</span>
                <span className="font-semibold text-slate-800">{activeDoc.testedDate}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">Physical State</span>
                <span className="font-semibold text-slate-800">{activeDoc.appearance}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">Method</span>
                <span className="font-semibold text-slate-800">RP-HPLC / ESI-MS</span>
              </div>
            </div>

            {/* Analytical Results Table */}
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1">
                Purity, Identity &amp; Quantitation (HPLC)
              </div>
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-100 text-[10px] font-mono text-slate-500 uppercase">
                    <tr>
                      <th className="p-2">Analyte</th>
                      <th className="p-2">Specification</th>
                      <th className="p-2">Result</th>
                      <th className="p-2 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[11px] font-mono">
                    <tr className="bg-emerald-50/60 font-semibold text-emerald-950">
                      <td className="p-2">HPLC Purity (214nm)</td>
                      <td className="p-2 text-slate-600">&ge; 99.0%</td>
                      <td className="p-2 text-emerald-700 font-bold">{activeDoc.purity}</td>
                      <td className="p-2 text-right text-emerald-600 font-bold">Pass</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-slate-700">Net Peptide Content</td>
                      <td className="p-2 text-slate-500">Report Only</td>
                      <td className="p-2 text-slate-800 font-medium">{activeDoc.netPeptide}</td>
                      <td className="p-2 text-right text-emerald-600 font-bold">Pass</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-slate-700">Identity (ESI-MS)</td>
                      <td className="p-2 text-slate-500">Theoretical &plusmn; 1Da</td>
                      <td className="p-2 text-slate-800 font-medium">Confirmed</td>
                      <td className="p-2 text-right text-emerald-600 font-bold">Pass</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Realistic HPLC Chromatogram Curve Graphic */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>HPLC Chromatogram (Peak: {activeDoc.retentionTime})</span>
                <span>214 nm Detection</span>
              </div>
              <div className="h-24 w-full bg-slate-50 rounded-xl border border-slate-200 p-2 relative flex items-end">
                {/* SVG Chromatogram Curve with Single Sharp Analytical Peak */}
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 70">
                  <line x1="0" y1="65" x2="300" y2="65" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="0" y1="35" x2="300" y2="35" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                  
                  <path
                    d="M 0 65 L 120 65 Q 140 65 147 10 Q 150 2 153 10 Q 160 65 180 65 L 300 65"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.8"
                  />
                  <circle cx="150" cy="5" r="3" fill="#0284c7" />
                </svg>
              </div>
            </div>

            {/* Verification Footer with QR Code Stamp */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <QrCode className="w-6 h-6 text-slate-800" />
                <div>
                  <div className="font-bold text-slate-800">Tamper-evident Certificate</div>
                  <div>Cryptographically signed verification</div>
                </div>
              </div>
              <span className="text-[9px] text-slate-400">Page 1 of 1</span>
            </div>

          </div>

        </div>

        {/* View All COAs Button matching Screenshot 2 */}
        <div className="text-center mt-12">
          <a
            href="#bestsellers"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0d211a] hover:bg-[#163b2f] text-white font-mono text-xs uppercase font-bold tracking-widest transition-all shadow-md hover:shadow-xl cursor-pointer"
          >
            VIEW ALL COAS
          </a>
        </div>

      </div>
    </section>
  );
}
