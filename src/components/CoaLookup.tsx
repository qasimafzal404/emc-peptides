"use client";

import React, { useState } from "react";
import { CERTIFICATES } from "@/data/products";
import { Search, FileCheck, Download, CheckCircle, Shield, AlertCircle } from "lucide-react";

export function CoaLookup() {
  const [searchQuery, setSearchQuery] = useState("EMC-7402-A");
  const [activeCert, setActiveCert] = useState(CERTIFICATES[0]);
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toUpperCase();
    const found = CERTIFICATES.find(
      (c) => c.lot.toUpperCase().includes(query) || c.compound.toUpperCase().includes(query)
    );
    if (found) {
      setActiveCert(found);
      setHasSearched(true);
    } else {
      setActiveCert(null as any);
      setHasSearched(true);
    }
  };

  const handleQuickSelect = (lot: string) => {
    setSearchQuery(lot);
    const found = CERTIFICATES.find((c) => c.lot === lot);
    if (found) setActiveCert(found);
  };

  return (
    <section id="coa-lookup" className="py-20 lg:py-28 bg-[#090e17] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            DOCUMENTATION INTEGRITY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Every Lot, On Record.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Never accept undocumented compounds. Verify independent reverse-phase chromatography (RP-HPLC) and electrospray ionization mass spectrometry (ESI-MS) by entering your vial lot number.
          </p>
        </div>

        {/* Search Bar + Quick Lot Pills */}
        <div className="max-w-2xl mb-10 space-y-3">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter lot number (e.g. EMC-7402-A, EMC-8911-B)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
              Verify
            </button>
          </form>

          {/* Quick presets */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400 font-mono">
            <span>Sample Lots:</span>
            {CERTIFICATES.slice(0, 4).map((c) => (
              <button
                key={c.lot}
                type="button"
                onClick={() => handleQuickSelect(c.lot)}
                className={`px-2.5 py-1 rounded bg-slate-900 border transition-colors ${
                  activeCert?.lot === c.lot
                    ? "border-cyan-400 text-cyan-300"
                    : "border-slate-800 hover:border-slate-700 text-slate-400"
                }`}
              >
                {c.lot} ({c.compound})
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Inspection Display Card */}
        {activeCert ? (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>AUTHENTIC CERTIFICATE VERIFIED</span>
                  </span>
                  <span className="text-xs text-slate-400 font-mono">ID: {activeCert.lot}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {activeCert.compound} Analytical Profile
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Conducted by Analytical Laboratory Services · Testing protocol ASTM/ICH Q2(R1)
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">HPLC PURITY</div>
                    <div className="text-xl font-black text-cyan-400 font-mono">{activeCert.purity}</div>
                    <div className="text-[10px] text-emerald-400 font-mono">&ge; 99.0% Spec Pass</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">ANALYSIS DATE</div>
                    <div className="text-sm font-bold text-white font-mono mt-1">{activeCert.date}</div>
                    <div className="text-[10px] text-slate-400 font-mono">Batch Certified</div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 col-span-2 sm:col-span-1">
                    <div className="text-[10px] font-mono text-slate-400">TEST METHODOLOGY</div>
                    <div className="text-xs font-semibold text-slate-200 mt-1 line-clamp-1">{activeCert.technique}</div>
                    <div className="text-[10px] text-cyan-400 font-mono">Dual Confirmed</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => alert(`Certificate PDF for ${activeCert.lot} opened in secure view.`)}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors border border-slate-700"
                  >
                    <Download className="w-4 h-4 text-cyan-400" />
                    <span>Download Full Analytical PDF</span>
                  </button>
                  <span className="text-[11px] text-slate-500 font-mono">SHA-256 Verified Signature</span>
                </div>
              </div>

              {/* Right: Chromatogram Graphical Representation */}
              <div className="lg:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3 border-b border-slate-800 pb-2">
                  <span>RP-HPLC SPECTRAL TRACE</span>
                  <span className="text-cyan-400">220 nm DETECTOR</span>
                </div>

                {/* SVG Simulated Peak Chromatogram */}
                <div className="w-full h-36 relative flex items-end">
                  <svg className="w-full h-full text-cyan-400" viewBox="0 0 300 100" fill="none">
                    <path
                      d="M 0,95 L 40,95 L 60,93 L 70,95 L 120,95 L 135,92 L 145,15 L 155,92 L 180,95 L 230,95 L 245,94 L 300,95"
                      stroke="#00f0ff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Fill underneath peak */}
                    <path
                      d="M 120,95 L 135,92 L 145,15 L 155,92 L 180,95 Z"
                      fill="rgba(0, 240, 255, 0.15)"
                    />
                    {/* Axis markings */}
                    <line x1="0" y1="95" x2="300" y2="95" stroke="#334155" strokeWidth="1" />
                    <line x1="145" y1="15" x2="145" y2="95" stroke="#00f0ff" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                  <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-cyan-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-cyan-500/30">
                    Peak RT: 8.42 min (Purity {activeCert.purity})
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mt-3 pt-2 border-t border-slate-900">
                  <span>Flow: 1.0 mL/min</span>
                  <span>Solvent: ACN / 0.1% TFA</span>
                  <span>Integrity: 100% PASS</span>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
            <AlertCircle className="w-8 h-8 text-amber-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">No Record Matched for "{searchQuery}"</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Please double check the lot number printed on your vial's label or choose one of the sample lots above.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
